export interface Achievement {
  id: string;
  title: string;
  category: "National" | "International" | "Campus";
  date: string;
  rank?: string;
  teamName?: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    id: "gemastik-xviii",
    title: "Gemastik XVIII Cyber Security Division",
    category: "National",
    date: "Oktober 2025",
    rank: "Finalist / Top 10",
    teamName: "BDCA Cyber Force",
    description: "Kompetisi Keamanan Siber Tingkat Perguruan Tinggi Nasional - Pusat Prestasi Nasional (Puspresnas)."
  },
  {
    id: "hacktoday-2025",
    title: "HackToday CTF 2025",
    category: "National",
    date: "September 2025",
    rank: "Finalist",
    teamName: "BDCA - 0xPalembang",
    description: "Kompetisi Capture The Flag Jeopardy Style Nasional diselenggarakan oleh Institut Pertanian Bogor (IPB)."
  },
  {
    id: "cyber-jawara-2025",
    title: "The Cyber Jawara National CTF 2025",
    category: "National",
    date: "Agustus 2025",
    rank: "Top 15 National",
    teamName: "BDCA Army",
    description: "Kejuaraan Keamanan Siber Bergengsi Indonesia diselenggarakan oleh CSIRT.ID dan ID-SIRTII."
  },
  {
    id: "find-it-2025",
    title: "FIND IT 2025 CTF Competition",
    category: "National",
    date: "Mei 2025",
    rank: "Finalist",
    teamName: "BDCA Red Team",
    description: "Kompetisi CTF Nasional Universitas Gadjah Mada (UGM) bidang Web Exploitation dan Reverse Engineering."
  },
  {
    id: "ctftime-global",
    title: "CTFtime Global Season Rating 2025",
    category: "International",
    date: "Musim 2025",
    rank: "Top Active Team Indonesia",
    teamName: "BDCA Team",
    description: "Partisipasi aktif dalam rangkaian kompetisi internasional CTFtime (SunshineCTF, BDSec, Cyber Jawara)."
  },
  {
    id: "ncw-2024",
    title: "National Cyber Week CTF 2024",
    category: "National",
    date: "November 2024",
    rank: "Top 8",
    teamName: "BDCA Vanguard",
    description: "Kompetisi penetrasi sistem dan eksploitasi kerentanan keamanan informasi tingkat nasional."
  }
];
