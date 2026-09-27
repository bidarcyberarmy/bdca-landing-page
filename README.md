# BDCA Landing Page and Ecosystem Gateway

Landing page resmi dan portal ekosistem untuk BDCA (Bina Darma Cyber Army). Menggunakan arsitektur Astro 5 yang dirancang untuk performa tinggi dan skor Lighthouse 100/100/100/100, siap dideploy secara gratis di Cloudflare Pages untuk repositori GitHub Organization.

---

## Fitur Utama

- Lighthouse 100: Zero-JS runtime default, FCP < 0.6s, TBT = 0ms, CLS = 0.
- Ecosystem Gateway: Portal perantara satu pintu untuk sub-domain dan platform ekosistem BDCA (CTF, Lab, Academy, Writeup).
- Data-Driven Architecture: Pemisahan data anggota tim, divisi, dan portal ke dalam folder `src/data/`.
- Free Organization Hosting: Kompatibel penuh dengan tier gratis Cloudflare Pages tanpa batasan seat organisasi.
- Desain Cyber Modern: Gaya visual pertahanan siber modern berbasis CSS scoped.

---

## Struktur Direktori Proyek

```
bdca page/
├── docs/                               # Seluruh file dokumentasi dan panduan
│   ├── ARCHITECTURE.md                 # Arsitektur sistem dan konsep Zero-JS
│   ├── DEPLOYMENT_GUIDE.md             # Panduan deployment Cloudflare Pages dan GitHub Pages
│   ├── DATA_MANAGEMENT.md              # Panduan penambahan dan update data
│   └── LIGHTHOUSE_OPTIMIZATION.md      # Metodologi optimasi skor Lighthouse 100
├── public/                             # File statis publik
│   ├── _headers                        # Security headers untuk Cloudflare Pages
│   ├── favicon.svg                     # File favicon
│   ├── robots.txt                      # Konfigurasi perayap mesin pencari
│   └── assets/team/                    # Folder penyimpanan foto anggota tim
├── src/                                # Source code utama (struktur kosong siap isi)
│   ├── components/                     # Folder komponen antarmuka
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── SubWebHub.astro
│   │   ├── Structure.astro
│   │   └── Footer.astro
│   ├── data/                           # Folder data terpisah
│   │   ├── site.ts
│   │   ├── team.ts
│   │   └── subwebs.ts
│   ├── layouts/                        # Folder layout master
│   │   └── Layout.astro
│   ├── pages/                          # Folder halaman
│   │   └── index.astro
│   └── styles/                         # Folder style dan token desain
│       └── global.css
├── astro.config.mjs                    # Konfigurasi Astro dan integrasi sitemap
├── package.json                        # Konfigurasi dependensi proyek
├── tsconfig.json                       # Konfigurasi TypeScript
├── README.md                           # Ringkasan proyek dan struktur
└── .gitignore                          # Daftar file yang diabaikan git
```

---

## Dokumentasi Lengkap (Folder docs/)

1. Architecture and System Design: docs/ARCHITECTURE.md
2. Deployment Guide: docs/DEPLOYMENT_GUIDE.md
3. Data Management Guide: docs/DATA_MANAGEMENT.md
4. Lighthouse 100 Optimization: docs/LIGHTHOUSE_OPTIMIZATION.md

---

## Perintah Pengembangan Lokal

### Install Dependensi
```bash
npm install
```

### Jalankan Development Server
```bash
npm run dev
```

### Build Produksi
```bash
npm run build
```

---

## Lisensi dan Kepemilikan
Dikelola oleh BDCA (Bina Darma Cyber Army).
