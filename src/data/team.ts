import type { ImageMetadata } from 'astro';
import type { LocalizedText } from './locales';
import agungSyaputra from '../assets/team/agung-syaputra.webp';
import ahmadGhumaydi from '../assets/team/ahmad-ghumaydi.webp';
import alifAgusLerian from '../assets/team/alif-agus-lerian.webp';
import anandaAlBuchkori from '../assets/team/ananda-al-buchkori.webp';
import dwiMargarettaS from '../assets/team/dwi-margaretta-s.webp';
import mSultanHaidar from '../assets/team/m-sultan-haidar.webp';
import muhammadFahjri from '../assets/team/muhammad-fahjri.webp';
import naufalFarid from '../assets/team/naufal-farid.webp';
import rivinaKaylaNazeva from '../assets/team/rivina-kayla-nazeva.webp';
import sidiqFatuhRahman from '../assets/team/sidiq-fatuh-rahman.webp';
import wihdatuNuuroAhmadi from '../assets/team/wihdatu-nuuro-ahmadi.webp';
import yeniNatalia from '../assets/team/yeni-natalia.webp';
import zalwandaVadissaArla from '../assets/team/zalwanda-vadissa-arla.webp';

export const rolesInIndonesian = {
  'Vice Commander': 'Wakil Ketua',
  Commander: 'Ketua',
  'General Secretary & Finance': 'Sekretaris Umum & Keuangan',
  'Offensive Lead': 'Koordinator Keamanan Ofensif',
  'Defensive Lead': 'Koordinator Keamanan Defensif',
  'Lab & Infrastructure': 'Lab & Infrastruktur',
  'Software Development Lead': 'Koordinator Pengembangan Perangkat Lunak',
  'Vice Software Development Lead': 'Wakil Koordinator Pengembangan Perangkat Lunak',
  'Social Media Specialist': 'Spesialis Media Sosial',
  'Content Designer & Documentation': 'Desain Konten & Dokumentasi',
  'Alumni Liaison': 'Penghubung Alumni',
  'External Partnership': 'Kemitraan Eksternal',
};

export interface TeamMember {
  name: string;
  role: keyof typeof rolesInIndonesian;
  avatar?: ImageMetadata;
}

export interface TeamGroup {
  id: 'leadership' | 'education' | 'software' | 'creative' | 'relations';
  name: LocalizedText;
  description: LocalizedText;
  members: TeamMember[];
}

export const rosterPeriod = '2026 — 2027';

export const teamGroups: TeamGroup[] = [
  {
    id: 'leadership',
    name: { en: 'Core Leadership', id: 'Pengurus Inti' },
    description: { en: 'Community coordination, direction, and continuity.', id: 'Koordinasi, arah, dan keberlanjutan komunitas.' },
    members: [
      { name: 'Yeni Natalia', role: 'Vice Commander', avatar: yeniNatalia },
      { name: 'Ahmad Ghumaydi', role: 'Commander', avatar: ahmadGhumaydi },
      { name: 'Dwi Margaretta S', role: 'General Secretary & Finance', avatar: dwiMargarettaS },
    ],
  },
  {
    id: 'education',
    name: { en: 'Education & Research', id: 'Edukasi & Riset' },
    description: { en: 'Research, learning, and skills development.', id: 'Riset, pembelajaran, dan pengembangan keterampilan.' },
    members: [
      { name: 'Wihdatu Nuuro Ahmadi', role: 'Offensive Lead', avatar: wihdatuNuuroAhmadi },
      { name: 'Muhammad Fahjri', role: 'Defensive Lead', avatar: muhammadFahjri },
      { name: 'Agung Syaputra', role: 'Lab & Infrastructure', avatar: agungSyaputra },
      { name: 'Ananda Al Buchkori', role: 'Lab & Infrastructure', avatar: anandaAlBuchkori },
    ],
  },
  {
    id: 'software',
    name: { en: 'Software Development', id: 'Pengembangan Perangkat Lunak' },
    description: { en: 'Software development and technical experiments.', id: 'Pengembangan perangkat lunak dan eksperimen teknis.' },
    members: [
      { name: 'Alif Agus Lerian', role: 'Software Development Lead', avatar: alifAgusLerian },
      { name: 'Sidiq Fatuh Rahman', role: 'Vice Software Development Lead', avatar: sidiqFatuhRahman },
    ],
  },
  {
    id: 'creative',
    name: { en: 'Creative & Branding', id: 'Kreatif & Branding' },
    description: { en: 'Identity, design, and visual communication.', id: 'Identitas, desain, dan komunikasi visual.' },
    members: [
      { name: 'Zalwanda Vadissa Arla', role: 'Social Media Specialist', avatar: zalwandaVadissaArla },
      { name: 'Naufal Farid', role: 'Content Designer & Documentation', avatar: naufalFarid },
    ],
  },
  {
    id: 'relations',
    name: { en: 'Public Relations', id: 'Hubungan Masyarakat' },
    description: { en: 'External relations and collaboration.', id: 'Hubungan eksternal dan kolaborasi.' },
    members: [
      { name: 'Rivina Kayla Nazeva', role: 'Alumni Liaison', avatar: rivinaKaylaNazeva },
      { name: 'M. Sultan Haidar', role: 'External Partnership', avatar: mSultanHaidar },
    ],
  },
];
