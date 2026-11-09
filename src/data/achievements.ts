interface Achievement {
  title: string;
  category: "National" | "International" | "Campus";
  date: string;
  rank?: string;
  teamName?: string;
  description?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Gemastik XVIII Cyber Security Division",
    category: "National",
    date: "October 2025",
    rank: "Finalist / Top 10",
    teamName: "BDCA Cyber Force",
    description: "A national university cybersecurity competition run by Pusat Prestasi Nasional (Puspresnas)."
  },
  {
    title: "HackToday CTF 2025",
    category: "National",
    date: "September 2025",
    rank: "Finalist",
    teamName: "BDCA - 0xPalembang",
    description: "A national Jeopardy-style Capture the Flag competition hosted by Institut Pertanian Bogor (IPB)."
  },
  {
    title: "The Cyber Jawara National CTF 2025",
    category: "National",
    date: "August 2025",
    rank: "Top 15 National",
    teamName: "BDCA Army",
    description: "An Indonesian cybersecurity championship organized by CSIRT.ID and ID-SIRTII."
  },
  {
    title: "FIND IT 2025 CTF Competition",
    category: "National",
    date: "May 2025",
    rank: "Finalist",
    teamName: "BDCA Red Team",
    description: "A national CTF hosted by Universitas Gadjah Mada (UGM), featuring web exploitation and reverse engineering."
  },
  {
    title: "CTFtime Global Season Rating 2025",
    category: "International",
    date: "2025 season",
    rank: "Top Active Team Indonesia",
    teamName: "BDCA Team",
    description: "BDCA competed in CTFtime events including SunshineCTF, BDSec, and Cyber Jawara."
  },
  {
    title: "National Cyber Week CTF 2024",
    category: "National",
    date: "November 2024",
    rank: "Top 8",
    teamName: "BDCA Vanguard",
    description: "A national competition focused on penetration testing and exploiting security vulnerabilities."
  }
];
