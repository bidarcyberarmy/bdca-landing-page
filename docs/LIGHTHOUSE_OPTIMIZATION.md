# BDCA Landing Page - Strategi Optimasi Lighthouse 100/100/100/100

Dokumen teknis ini merinci metodologi untuk menjaga skor 100 pada keempat kategori Google Lighthouse: Performance, Accessibility, Best Practices, dan SEO.

---

## 1. Performance (Target: 100)

- Zero Client JavaScript: Komponen `.astro` menghasilkan static HTML tanpa JS hydration saat dimuat. Total Blocking Time bernilai 0 ms.
- Cumulative Layout Shift (CLS = 0): Semua gambar, avatar, dan SVG wajib memiliki atribut width dan height eksplisit atau CSS aspect-ratio tetap.
- First Contentful Paint (FCP < 0.6s): Inlined critical CSS menghindari pemblokiran render melalui permintaan HTTP tambahan.
- Font Loading: Menggunakan system font modern atau web font dengan properti font-display: swap.
- Kompresi dan Caching: Caching statis otomatis dan kompresi Brotli di Cloudflare Pages.

---

## 2. Accessibility (Target: 100)

- Rasio Kontras Warna: Mengikuti pedoman WCAG AAA dengan rasio kontras teks terhadap latar belakang di atas 7:1.
- Accessible Names: Setiap tombol interaktif dan link ikon wajib memiliki atribut aria-label deskriptif.
- Navigasi Keyboard: State focus-visible yang jelas dengan outline kontras untuk navigasi tombol Tab.
- Semantic HTML5: Struktur hierarki heading tertib (satu tag h1, diikuti h2 dan h3 tanpa melompati tingkatan).

---

## 3. Best Practices (Target: 100)

- Security Headers: Dikonfigurasi melalui `public/_headers` (HSTS, X-Content-Type-Options: nosniff, X-Frame-Options: DENY, Referrer-Policy).
- HTTPS: Diaktifkan secara default oleh Cloudflare Pages dengan TLS 1.3.
- Bebas Kesalahan Konsol: Memastikan tidak ada script pihak ketiga yang menyebabkan error atau warning di browser console.

---

## 4. Search Engine Optimization / SEO (Target: 100)

- Metadata Lengkap: Tag title unik, meta description informatif, canonical URL, dan viewport meta tag.
- OpenGraph dan Twitter Cards: Preview tautan saat dibagikan di platform sosial.
- Structured Data: Skema schema.org bertipe Organization dan WebSite menggunakan JSON-LD.
- Robots.txt dan Sitemap: Menyediakan file robots.txt statis dan sitemap XML otomatis via `@astrojs/sitemap`.
