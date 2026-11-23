import { siteConfig } from './site';
import type { LocalizedText } from './locales';

export const portalCategories = {
  Community: 'Komunitas', Credential: 'Kredensial', Portal: 'Portal',
  Competition: 'Kompetisi', 'Training and Lab': 'Pelatihan dan Lab',
};

type SubWeb = {
  title: LocalizedText;
  description: LocalizedText;
  category: keyof typeof portalCategories;
} & ({ status: "online"; url: string } | { status: "maintenance" | "internal" });

export const subWebs: SubWeb[] = [
  {
    title: { en: "We Are BDCA (Members & Showcase)", id: "We Are BDCA (Anggota & Karya)" },
    description: { en: "Browse member profiles, achievements, and projects from the BDCA community.", id: "Lihat profil anggota, prestasi, dan proyek komunitas BDCA." },
    url: "https://weare.bidarcyberarmy.org",
    category: "Community",
    status: "online"
  },
  {
    title: { en: "BDCA Credential & Cert Verification", id: "Verifikasi Kredensial & Sertifikat BDCA" },
    description: { en: "Verify BDCA membership, skills, and workshop certificates.", id: "Verifikasi keanggotaan, keterampilan, dan sertifikat lokakarya BDCA." },
    url: "https://cert.bidarcyberarmy.org",
    category: "Credential",
    status: "online"
  },
  {
    title: { en: "BDCA Official Web & Knowledge Base", id: "Situs Resmi & Pusat Pengetahuan BDCA" },
    description: { en: "Visit BDCA’s main website for security research documentation and public repositories.", id: "Kunjungi situs utama BDCA untuk membaca dokumentasi riset keamanan dan mengakses repositori publik." },
    url: siteConfig.url,
    category: "Portal",
    status: "online"
  },
  {
    title: { en: "CTFtime Global Team Ranking", id: "Peringkat Tim Global CTFtime" },
    description: { en: "Follow BDCA’s record in national and international Capture the Flag competitions.", id: "Ikuti rekam jejak BDCA di kompetisi Capture the Flag nasional dan internasional." },
    url: siteConfig.links.ctftime,
    category: "Competition",
    status: "online"
  },
  {
    title: { en: "BDCA VulnLab & Practice Sandbox", id: "BDCA VulnLab & Lab Latihan" },
    description: { en: "Practice offensive and defensive security in isolated labs with simulated networks and intentionally vulnerable machines.", id: "Latih keamanan ofensif dan defensif di lab terisolasi dengan simulasi jaringan dan mesin yang sengaja dibuat rentan." },
    category: "Training and Lab",
    status: "internal"
  },
  {
    title: { en: "BDCA Community Discord & Network", id: "Discord Komunitas BDCA" },
    description: { en: "Connect with members, ask technical questions, and keep up with BDCA events.", id: "Kenali anggota, ajukan pertanyaan teknis, dan ikuti kegiatan BDCA." },
    url: siteConfig.links.discord,
    category: "Community",
    status: "online"
  }
];
