# BDCA Landing Page - Arsitektur dan Desain Sistem

Dokumen ini menjelaskan arsitektur teknis dan rancangan sistem landing page BDCA (Bina Darma Cyber Army).

---

## 1. Tujuan Arsitektur

1. Performa Maksimal (Target Lighthouse 100): Menghilangkan runtime overhead pada browser client.
2. Data-Driven Architecture: Memisahkan struktur data (anggota tim, divisi, sub-web) dari kode tampilan UI.
3. Aksesibilitas dan Standar Web: Memenuhi standar semantic HTML5 dan WCAG AAA.
4. Hosting Tanpa Biaya: Kompatibel dengan tier gratis untuk akun GitHub Organization (Cloudflare Pages).

---

## 2. Pemilihan Framework: Astro (Islands Architecture)

Astro dipilih berdasarkan pertimbangan berikut:

- Zero JavaScript Runtime by Default: Komponen Astro dikompilasi menjadi pure static HTML dan CSS pada saat proses build. Tidak ada bundle JavaScript runtime (seperti React Hydration) yang membebani CPU perangkat mobile.
- Total Blocking Time (TBT) = 0 ms: Karena tidak ada script hydration yang berjalan saat halaman pertama kali dibuka, rendering bersifat instan.
- Built-in Asset Optimization: Penanganan aset statis otomatis dengan atribut dimensi yang presisi untuk mencegah Cumulative Layout Shift (CLS = 0).
- Data Separation: Kemudahan pemisahan data ke file TypeScript mandiri di dalam folder `src/data/`.

---

## 3. Alur Data dan Komponen

```
src/data/ (site.ts, team.ts, subwebs.ts)
                    |
                    v
          Astro Build Engine
                    |
                    v
    Static HTML + Inlined Scoped CSS
                    |
                    v
    Cloudflare Pages (Global CDN Edge)
```

Struktur hierarki komponen:
- `src/layouts/Layout.astro`: Master layout penampung tag meta SEO, OpenGraph, dan Schema.org JSON-LD.
- `src/components/Navbar.astro`: Header navigasi dan indikator status operasional.
- `src/components/Hero.astro`: Judul utama, ringkasan profil, dan tombol aksi.
- `src/components/About.astro`: Profil organisasi, visi, misi, dan tiga pilar keahlian.
- `src/components/SubWebHub.astro`: Portal perantara menuju seluruh sub-web dan layanan ekosistem BDCA.
- `src/components/Structure.astro`: Struktur kepengurusan BPH dan divisi teknis.
- `src/components/Footer.astro`: Informasi kontak, alamat sekretariat, copyright, dan tautan sosial.

---

## 4. Pemisahan Layer Data

Seluruh data yang dapat berubah secara berkala diletakkan pada folder `src/data/`:
- `src/data/site.ts`: Informasi umum nama organisasi, deskripsi, kontak, dan tautan sosial.
- `src/data/team.ts`: Data pengurus BPH dan divisi teknis operasional.
- `src/data/subwebs.ts`: Data platform sub-web, subdomain, status, kategori, dan tag.
