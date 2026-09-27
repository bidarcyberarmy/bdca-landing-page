export interface TeamMember {
  id: string;
  name: string;
  role: string;
  divisionId: "bph" | "offensive" | "defensive" | "rnd" | "media";
  divisionName: string;
  avatar: string;
  github?: string;
  linkedin?: string;
  certifications?: string[];
  bio?: string;
}

export interface Division {
  id: "bph" | "offensive" | "defensive" | "rnd" | "media";
  name: string;
  shortName: string;
  description: string;
  focus: string[];
}

export const divisions: Division[] = [
  {
    id: "bph",
    name: "Badan Pengurus Harian (BPH)",
    shortName: "BPH",
    description: "Pengarah strategis, penanggung jawab kebijakan, dan tata kelola keorganisasian BDCA.",
    focus: ["Strategic Planning", "Organization Governance", "External Partnership"]
  },
  {
    id: "offensive",
    name: "Offensive Security (Red Team)",
    shortName: "Red Team",
    description: "Fokus pada penetrasi sistem, eksploitasi celah keamanan etis, dan kompetisi Capture The Flag.",
    focus: ["Penetration Testing", "Binary Exploitation", "Web Vulnerability", "Cryptography"]
  },
  {
    id: "defensive",
    name: "Defensive Security (Blue Team)",
    shortName: "Blue Team",
    description: "Fokus pada pengamanan infrastruktur, deteksi intrusi, incident response, dan digital forensics.",
    focus: ["SOC Operations", "Threat Hunting", "Incident Response", "Digital Forensics"]
  },
  {
    id: "rnd",
    name: "Research and Development (R&D)",
    shortName: "R&D",
    description: "Riset zero-day, malware analysis, cloud security, dan pengembangan perkakas otomasi.",
    focus: ["Malware Analysis", "Security Automation", "Cloud Security", "Vulnerability Research"]
  },
  {
    id: "media",
    name: "Media and Public Relations",
    shortName: "Media & PR",
    description: "Publikasi hasil riset, dokumentasi workshop, serta komunikasi publik dan edukasi masyarakat.",
    focus: ["Content Publishing", "Workshop Coordination", "Community Outreach", "Public Relations"]
  }
];

export const teamMembers: TeamMember[] = [
  // Badan Pengurus Harian (BPH)
  {
    id: "ketua-umum",
    name: "Muhammad Fadhil",
    role: "Ketua Umum",
    divisionId: "bph",
    divisionName: "Badan Pengurus Harian",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["CEH", "Security+"],
    bio: "Memimpin arah strategis, kemitraan eksternal, dan pengembangan talenta pertahanan siber BDCA."
  },
  {
    id: "wakil-ketua",
    name: "Rian Aditya",
    role: "Wakil Ketua Umum",
    divisionId: "bph",
    divisionName: "Badan Pengurus Harian",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["eJPT", "Network+"],
    bio: "Mengordinasikan kegiatan harian lintas divisi dan supervisi kesiapan kompetisi CTF."
  },
  {
    id: "sekretaris",
    name: "Annisa Rahmawati",
    role: "Sekretaris Jenderal",
    divisionId: "bph",
    divisionName: "Badan Pengurus Harian",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["ISO 27001 Foundation"],
    bio: "Bertanggung jawab atas administrasi keorganisasian, tata kelola data, dan dokumentasi resmi."
  },
  {
    id: "bendahara",
    name: "Dinda Maharani",
    role: "Bendahara Umum",
    divisionId: "bph",
    divisionName: "Badan Pengurus Harian",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["FinOps Practitioner"],
    bio: "Mengelola akuntabilitas anggaran riset, lab server, serta pendanaan kompetisi tim."
  },

  // Offensive Security (Red Team)
  {
    id: "lead-redteam",
    name: "Bagus Pratama",
    role: "Head of Offensive Security",
    divisionId: "offensive",
    divisionName: "Offensive Security (Red Team)",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["OSCP", "CRTP"],
    bio: "Spesialis exploit development, Active Directory attack paths, dan kapten tim CTF BDCA."
  },
  {
    id: "staff-redteam",
    name: "Farhan Hakim",
    role: "Binary Exploitation & Reverse Engineer",
    divisionId: "offensive",
    divisionName: "Offensive Security (Red Team)",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["eWPTX"],
    bio: "Fokus pada analisis biner, fuzzing, dan reverse engineering tantangan CTF tingkat lanjut."
  },

  // Defensive Security (Blue Team)
  {
    id: "lead-blueteam",
    name: "Zulfa Ramadhan",
    role: "Head of Defensive Security",
    divisionId: "defensive",
    divisionName: "Defensive Security (Blue Team)",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["BTL1", "CySA+"],
    bio: "Memimpin monitoring SIEM internal, packet analysis, dan investigasi digital forensics."
  },
  {
    id: "staff-blueteam",
    name: "Kevin Ardiansyah",
    role: "Incident Responder & Forensics",
    divisionId: "defensive",
    divisionName: "Defensive Security (Blue Team)",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["Security+"],
    bio: "Spesialis memori dump forensics, endpoint detection, dan pengerasan konfigurasi server."
  },

  // Research and Development (R&D)
  {
    id: "lead-rnd",
    name: "Dimas Saputra",
    role: "Head of Research & Development",
    divisionId: "rnd",
    divisionName: "Research and Development",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["AWS Security", "CBBH"],
    bio: "Mengembangkan automation toolkit pertahanan siber dan riset isolasi malware sandbox."
  },

  // Media and Public Relations
  {
    id: "lead-media",
    name: "Siti Nurhaliza",
    role: "Head of Media & Community",
    divisionId: "media",
    divisionName: "Media and Public Relations",
    avatar: "/assets/team/placeholder.svg",
    github: "https://github.com/bdca",
    linkedin: "https://linkedin.com",
    certifications: ["Google Cyber Professional"],
    bio: "Mengelola diseminasi ilmu keamanan siber, workshop publik, dan publikasi writeup BDCA."
  }
];
