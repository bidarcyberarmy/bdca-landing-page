# BDCA Landing Page - Panduan Deployment (100% Free)

Panduan deployment gratis untuk repositori di bawah GitHub Organization tanpa biaya langganan seat.

---

## 1. Analisis Platform Deployment untuk GitHub Organization

- Vercel Hobby (Free): Memiliki batasan terhadap repositori organisasi dan mewajibkan langganan berbayar (Vercel Pro $20/seat/bulan).
- Cloudflare Pages: Mendukung penuh repositori akun personal maupun GitHub Organization secara 100% gratis tanpa batasan seat anggota.
- GitHub Pages: Gratis langsung di dalam repositori GitHub via GitHub Actions.

Rekomendasi utama adalah Cloudflare Pages karena memberikan unlimited bandwidth, edge latency rendah, perlindungan DDoS, dan kemudahan pengaturan security headers via file `_headers`.

---

## 2. Langkah Deployment di Cloudflare Pages

### Langkah 1: Buat Repositori dan Push Kode
Buat repositori baru di akun GitHub Organization Anda, lalu inisialisasi dan push secara mandiri:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<organisasi-anda>/<nama-repo>.git
git push -u origin main
```

### Langkah 2: Hubungkan ke Cloudflare Pages
1. Masuk ke dashboard Cloudflare (dash.cloudflare.com).
2. Pilih menu "Workers & Pages" > "Create application" > tab "Pages" > "Connect to Git".
3. Berikan akses ke repositori GitHub Organization Anda.
4. Pilih repositori tersebut dan klik "Begin setup".

### Langkah 3: Konfigurasi Pengaturan Build
Gunakan konfigurasi berikut:
- Framework preset: Astro
- Build command: npm run build
- Build output directory: dist
- Root directory: ./

Klik "Save and Deploy". Proses build akan berjalan otomatis dan menghasilkan link publik beralamat `*.pages.dev`.

### Langkah 4: Kustom Domain (Opsional)
Jika organisasi memiliki domain resmi (misal `bdca.org` atau `bdca.id`):
1. Masuk ke halaman project Pages di dashboard Cloudflare.
2. Buka tab "Custom domains".
3. Masukkan domain yang diinginkan dan ikuti petunjuk konfigurasi DNS.

---

## 3. Opsi Alternatif: GitHub Pages via GitHub Actions

Jika ingin menggunakan GitHub Pages:
1. Buat file `.github/workflows/deploy.yml` dengan langkah `npm ci`, `npm run build`, dan upload folder `dist`.
2. Di pengaturan repositori GitHub, buka menu "Pages", lalu pilih source "GitHub Actions".

---

## 4. Security Headers

File `public/_headers` disertakan untuk mengaktifkan:
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy
