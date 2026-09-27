# BDCA Landing Page - Keputusan Kunci Sistem (DECISIONS.md)

Dokumen ini adalah Single Source of Truth (SSOT) yang mencatat seluruh keputusan arsitektur, standar visual, kontrak data, aksesibilitas, dan batasan performa untuk proyek landing page BDCA (Bina Darma Cyber Army).

Status: Approved
Tanggal: 2026-09-12
Target: Google Lighthouse 100/100/100/100

---

## 1. Design System dan Tokens

### Palet Warna
- Background Body: #060913 (Deep Cyber Dark)
- Background Surface / Header: #0d1527 (Navy Slate)
- Background Card: #131d35 (Dark Indigo Slate)
- Background Card Hover: #192644
- Border Subtle: #1e293b
- Border Bright: #334155
- Border Accent: rgba(0, 240, 255, 0.3)
- Text Primary: #f8fafc (Crisp White / Slate 50)
- Text Secondary: #94a3b8 (Slate 400)
- Text Muted: #64748b (Slate 500)
- Text Inverse: #060913
- Accent Cyan Neon: #00f0ff (Cyber Glow)
- Accent Blue Neon: #0066ff (Primary Action)
- Accent Green Neon: #10b981 (Status Online)
- Accent Amber Neon: #f59e0b (Status Maintenance)
- Accent Blue Pill: #3b82f6 (Status Internal)

### Skala Spacing
- 4px (--space-xs): Gap micro-badge
- 8px (--space-sm): Gap tombol internal dan pill
- 16px (--space-md): Padding card mobile, gap standar
- 24px (--space-lg): Padding card desktop
- 32px (--space-xl): Gap antar section mobile
- 48px (--space-2xl): Margin header section
- 64px - 96px (--space-3xl): Padding vertical section (clamp)

### Tipografi
- Font Family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif
- Monospace Family: "SF Mono", Monaco, "Cascadia Code", "Roboto Mono", monospace
- Fluid Heading Scale:
  - H1: clamp(2.25rem, 5vw, 3.75rem)
  - H2: clamp(1.75rem, 3.5vw, 2.5rem)
  - H3: clamp(1.2rem, 2vw, 1.4rem)
  - Body: 1rem (16px), line-height 1.65

### Border Radius
- sm: 6px
- md: 12px
- lg: 18px
- full: 9999px

---

## 2. Standar Aksesibilitas (WCAG)

- Rasio Kontras Teks Utama: Wajib >= 7:1 terhadap background (#f8fafc pada #060913 menghasilkan rasio 17.5:1, mematuhi WCAG AAA).
- Rasio Kontras Teks Sekunder: Wajib >= 4.5:1 (#94a3b8 pada #060913 menghasilkan rasio 7.2:1, mematuhi WCAG AAA).
- Keyboard Focus Indicator: `:focus-visible` wajib menggunakan outline 2px solid #00f0ff dengan outline-offset 3px dan box-shadow cyan glow.
- Skip Link: Wajib menyertakan elemen navigasi lompat ke konten utama (`#main-content`) pada baris pertama DOM body.
- Struktur Semantik:
  - Tepat 1 tag H1 per halaman (terletak di Hero).
  - Urutan heading tidak boleh melompati level (H1 -> H2 -> H3).
  - Seluruh tombol tanpa teks visual wajib memiliki atribut `aria-label`.
  - Seluruh tautan eksternal wajib memiliki `rel="noopener noreferrer"`.

---

## 3. Performance Budget (Target Lighthouse 100)

- Client JavaScript Runtime: 0 KB (Zero-JS default). Tidak ada bundler React/Vue di browser client.
- First Contentful Paint (FCP): < 0.6 detik.
- Largest Contentful Paint (LCP): < 1.0 detik.
- Total Blocking Time (TBT): 0 ms.
- Cumulative Layout Shift (CLS): 0.00 (Semua gambar dan SVG wajib memiliki aspect-ratio 1:1 atau width/height eksplisit).
- CSS Delivery: Inlined stylesheets pada head (`build: { inlineStylesheets: "always" }`).
- Total Asset Payload Halaman Pertama: < 100 KB total.

---

## 4. SEO dan Structured Data

- Canonical URL: https://bdca.pages.dev
- Metadata:
  - Title Tag: 50 - 60 karakter deskriptif.
  - Meta Description: 140 - 160 karakter deskriptif.
  - OpenGraph / Twitter Card: Format summary_large_image dengan fallback image 1200x630 (/og-default.svg).
- Structured Data: Schema.org JSON-LD tipe `Organization` dan `WebSite` disematkan di dalam tag head.
- Crawler Directives: `public/robots.txt` mengarahkan bot perayap ke `https://bdca.pages.dev/sitemap-index.xml`.

---

## 5. Strategi Konten dan Taksonomi Data

- Bahasa Utama: Bahasa Indonesia formal, lugas, dan berbobot teknis (cyber security domain).
- Nomenklatur Divisi Resmi:
  1. BPH: Badan Pengurus Harian
  2. Offensive Security: Red Team (CTF, Exploit Development, Pentest)
  3. Defensive Security: Blue Team (SOC, Threat Hunting, Incident Response, Forensics)
  4. Research and Development: R&D (Malware Analysis, Cloud Security, Tooling)
  5. Media and Public Relations: Media, Publikasi, dan Edukasi
- Status Operasional Sub-Web:
  - `online`: Layanan aktif dan dapat diakses publik (Pill hijau).
  - `maintenance`: Layanan dalam pembaruan berkala (Pill oranye).
  - `internal`: Layanan khusus internal anggota BDCA (Pill biru).

---

## 6. Konfigurasi Deployment

- Platform Hosting: Cloudflare Pages (Free Tier).
- Alasan Pemilihan: Bebas biaya seat untuk GitHub Organization, bandwidth tanpa batas, CDN Anycast global, proteksi DDoS enterprise.
- Production Branch: `main`.
- Build Command: `npm run build`.
- Output Directory: `dist`.
- Security Headers (`public/_headers`):
  - Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: camera=(), microphone=(), geolocation=()
