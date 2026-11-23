import type { LocalizedText } from './locales';

export const achievementCategories = { National: 'Nasional', International: 'Internasional', Campus: 'Kampus' };

interface Achievement {
  title: string;
  category: keyof typeof achievementCategories;
  date: LocalizedText;
  rank?: LocalizedText;
  teamName?: string;
  description?: LocalizedText;
}

export const achievements: Achievement[] = [
  {
    title: "Gemastik XVIII Cyber Security Division",
    category: "National",
    date: { en: "October 2025", id: "Oktober 2025" },
    rank: { en: "Finalist / Top 10", id: "Finalis / 10 Besar" },
    teamName: "BDCA Cyber Force",
    description: { en: "A national university cybersecurity competition run by Pusat Prestasi Nasional (Puspresnas).", id: "Kompetisi keamanan siber nasional antarperguruan tinggi yang diselenggarakan oleh Pusat Prestasi Nasional (Puspresnas)." }
  },
  {
    title: "HackToday CTF 2025",
    category: "National",
    date: { en: "September 2025", id: "September 2025" },
    rank: { en: "Finalist", id: "Finalis" },
    teamName: "BDCA - 0xPalembang",
    description: { en: "A national Jeopardy-style Capture the Flag competition hosted by Institut Pertanian Bogor (IPB).", id: "Kompetisi Capture the Flag nasional dengan format Jeopardy yang diselenggarakan oleh Institut Pertanian Bogor (IPB)." }
  },
  {
    title: "The Cyber Jawara National CTF 2025",
    category: "National",
    date: { en: "August 2025", id: "Agustus 2025" },
    rank: { en: "Top 15 National", id: "15 Besar Nasional" },
    teamName: "BDCA Army",
    description: { en: "An Indonesian cybersecurity championship organized by CSIRT.ID and ID-SIRTII.", id: "Kejuaraan keamanan siber Indonesia yang diselenggarakan oleh CSIRT.ID dan ID-SIRTII." }
  },
  {
    title: "FIND IT 2025 CTF Competition",
    category: "National",
    date: { en: "May 2025", id: "Mei 2025" },
    rank: { en: "Finalist", id: "Finalis" },
    teamName: "BDCA Red Team",
    description: { en: "A national CTF hosted by Universitas Gadjah Mada (UGM), featuring web exploitation and reverse engineering.", id: "Kompetisi CTF nasional yang diselenggarakan oleh Universitas Gadjah Mada (UGM), dengan tantangan eksploitasi web dan rekayasa balik." }
  },
  {
    title: "CTFtime Global Season Rating 2025",
    category: "International",
    date: { en: "2025 season", id: "Musim 2025" },
    rank: { en: "Top Active Team Indonesia", id: "Tim Aktif Teratas di Indonesia" },
    teamName: "BDCA Team",
    description: { en: "BDCA competed in CTFtime events including SunshineCTF, BDSec, and Cyber Jawara.", id: "BDCA mengikuti kompetisi CTFtime, termasuk SunshineCTF, BDSec, dan Cyber Jawara." }
  },
  {
    title: "National Cyber Week CTF 2024",
    category: "National",
    date: { en: "November 2024", id: "November 2024" },
    rank: { en: "Top 8", id: "8 Besar" },
    teamName: "BDCA Vanguard",
    description: { en: "A national competition focused on penetration testing and exploiting security vulnerabilities.", id: "Kompetisi nasional yang berfokus pada uji penetrasi dan eksploitasi kerentanan keamanan." }
  }
];
