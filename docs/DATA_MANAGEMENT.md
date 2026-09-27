# BDCA Landing Page - Panduan Pengelolaan Data

Panduan untuk memperbarui data pengurus, divisi, platform sub-web, dan metadata organisasi.

---

## 1. Pengelolaan Data Anggota Tim (src/data/team.ts)

File ini menampung susunan pengurus Badan Pengurus Harian (BPH) dan divisi teknis operasional.

### Format Data Anggota:
```ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  divisionId: string;
  divisionName: string;
  avatar: string;
  github?: string;
  linkedin?: string;
  certifications?: string[];
  bio?: string;
}
```

### Prosedur Penambahan Foto dan Anggota:
1. Tempatkan file foto anggota di dalam folder `public/assets/team/` (disarankan aspek rasio 1:1 format WebP atau SVG).
2. Buka file `src/data/team.ts`.
3. Tambahkan objek anggota ke dalam array `teamMembers`.

---

## 2. Pengelolaan Portal Sub-Web (src/data/subwebs.ts)

Portal perantara sub-web digunakan untuk menghubungkan landing page utama dengan sub-domain dan layanan ekosistem BDCA.

### Format Data Sub-Web:
```ts
export interface SubWeb {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  status: "online" | "maintenance" | "internal";
  statusLabel: string;
  tags: string[];
  icon: string;
  featured?: boolean;
}
```

### Nilai Status:
- online: Platform sedang aktif dan dapat diakses publik.
- maintenance: Platform sedang dalam proses perbaikan atau pembaruan.
- internal: Platform khusus untuk anggota internal organisasi.

---

## 3. Pengelolaan Informasi Situs (src/data/site.ts)

File `src/data/site.ts` digunakan untuk mengatur konfigurasi global:
- Nama lengkap dan nama pendek organisasi
- Deskripsi meta SEO
- Alamat sekretariat atau lab
- Email kontak resmi
- Tautan akun media sosial
