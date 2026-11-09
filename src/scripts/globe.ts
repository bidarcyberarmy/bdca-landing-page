// The coastline texture uses Natural Earth 1:110m Land (public domain).
const vertexSource = `
  attribute vec2 aPosition;
  void main() {
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const fragmentSource = `
  precision mediump float;
  uniform sampler2D uLand;
  uniform float uSize;
  uniform float uLongitude;

  void main() {
    vec2 point = (gl_FragCoord.xy / uSize * 2.0 - 1.0) / 0.965;
    float radius = length(point);
    if (radius >= 1.0) discard;
    float depth = sqrt(1.0 - radius * radius);
    float latitude = asin(clamp(point.y * 0.951057 + depth * 0.309017, -1.0, 1.0));
    float longitude = atan(point.x, depth * 0.951057 - point.y * 0.309017) + uLongitude;
    vec2 uv = vec2(fract(longitude / 6.283185 + 0.5), 0.5 - latitude / 3.141593);
    float land = texture2D(uLand, uv).r;

    float light = clamp(0.45 - 0.36 * point.x + 0.32 * point.y + 0.49 * depth, 0.0, 1.0);
    vec3 ocean = mix(vec3(135.0, 148.0, 168.0), vec3(239.0, 246.0, 255.0), light);
    vec3 coast = mix(vec3(109.0, 145.0, 193.0), vec3(173.0, 205.0, 245.0), light);
    vec3 color = mix(ocean, coast, land);

    vec2 gridDistance = abs(fract(vec2(longitude, latitude) / 0.261799 + 0.5) - 0.5);
    float grid = min(gridDistance.x * max(0.2, cos(latitude)), gridDistance.y);
    color = mix(color, vec3(83.0, 117.0, 164.0), (1.0 - smoothstep(0.0, 0.013, grid)) * 0.19);
    float alpha = clamp((1.0 - radius) * uSize * 0.5, 0.0, 1.0);
    gl_FragColor = vec4(color / 255.0, alpha);
  }
`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
}

export async function createGlobe(host: HTMLElement) {
  const visual = host.querySelector('.globe-visual');
  const poster = host.querySelector<HTMLImageElement>('.globe-poster');
  const orbit = host.querySelector('.globe-orbit');
  if (!visual || !poster || !orbit) return null;

  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    premultipliedAlpha: false,
    powerPreference: 'low-power',
  });
  if (!gl) return null;

  const vertex = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragment = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  const buffer = gl.createBuffer();
  const texture = gl.createTexture();
  if (!vertex || !fragment || !program || !buffer || !texture) return null;

  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return null;

  const map = new Image();
  map.src = '/assets/cloud-globe-land.webp';
  await map.decode();

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const position = gl.getAttribLocation(program, 'aPosition');
  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, map);
  gl.uniform1i(gl.getUniformLocation(program, 'uLand'), 0);
  const longitudeUniform = gl.getUniformLocation(program, 'uLongitude');
  const sizeUniform = gl.getUniformLocation(program, 'uSize');

  let longitude = 108 * Math.PI / 180;
  let playing = false;
  let visible = false;
  let lost = false;
  let timer = 0;
  let frame = 0;
  let lastPaint = 0;

  function draw() {
    if (!gl || lost) return;
    const size = Math.min(672, Math.max(1, Math.round(host.clientWidth * Math.min(devicePixelRatio, 1.25))));
    if (canvas.width !== size || canvas.height !== size) {
      canvas.width = size;
      canvas.height = size;
      gl.viewport(0, 0, size, size);
    }
    gl.uniform1f(sizeUniform, size);
    gl.uniform1f(longitudeUniform, longitude);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function schedule() {
    if (!playing || !visible || document.hidden || lost || timer || frame) return;
    timer = window.setTimeout(() => {
      timer = 0;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const now = performance.now();
        if (lastPaint) longitude = (longitude + Math.min(now - lastPaint, 80) * 0.0001) % (2 * Math.PI);
        lastPaint = now;
        draw();
        schedule();
      });
    }, Math.max(0, 1000 / 24 - (performance.now() - lastPaint) - 6));
  }

  function sync() {
    clearTimeout(timer);
    cancelAnimationFrame(frame);
    timer = 0;
    frame = 0;
    lastPaint = 0;
    schedule();
  }

  const visibility = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  const sizeObserver = new ResizeObserver(() => {
    if (visible && !document.hidden) draw();
  });

  canvas.addEventListener('webglcontextlost', () => {
    lost = true;
    sync();
    visibility.disconnect();
    sizeObserver.disconnect();
    document.removeEventListener('visibilitychange', sync);
    canvas.remove();
    poster.hidden = false;
    host.dispatchEvent(new Event('globe-unavailable'));
  }, { once: true });

  visual.insertBefore(canvas, orbit);
  draw();
  poster.hidden = true;
  visibility.observe(host.closest('.globe-stage') ?? host);
  sizeObserver.observe(host);
  document.addEventListener('visibilitychange', sync);

  return {
    setPlaying(value: boolean) {
      playing = value;
      sync();
    },
  };
}
