export interface SubWeb {
  id: string;
  title: string;
  description: string;
  url: string;
  category: "Community" | "Credential" | "Portal" | "Competition" | "Training and Lab";
  status: "online" | "maintenance" | "internal";
  statusLabel: string;
  tags: string[];
  icon: string;
  featured?: boolean;
}

export const subWebs: SubWeb[] = [
  {
    id: "weare-bdca",
    title: "We Are BDCA (Members & Showcase)",
    description: "Direktori resmi profil anggota, portofolio pencapaian, dan etalase karya para talent ekosistem BDCA.",
    url: "https://weare.bidarcyberarmy.org",
    category: "Community",
    status: "online",
    statusLabel: "Live Portal",
    tags: ["Member Directory", "Portfolio", "Showcase"],
    icon: "users",
    featured: true
  },
  {
    id: "cert-verification",
    title: "BDCA Credential & Cert Verification",
    description: "Sistem validasi digital dan verifikasi keaslian sertifikat keanggotaan, sertifikasi keahlian, dan workshop resmi BDCA.",
    url: "https://cert.bidarcyberarmy.org",
    category: "Credential",
    status: "online",
    statusLabel: "Credential System",
    tags: ["Certificate Verification", "Credentials", "Validation"],
    icon: "award",
    featured: true
  },
  {
    id: "root-portal",
    title: "BDCA Official Web & Knowledge Base",
    description: "Portal utama organisasi, dokumentasi riset keamanan informasi, dan repositori terbuka Bina Darma Cyber Army.",
    url: "https://bidarcyberarmy.org",
    category: "Portal",
    status: "online",
    statusLabel: "Main Domain",
    tags: ["Root Portal", "Knowledge Base", "Research"],
    icon: "globe"
  },
  {
    id: "ctftime-profile",
    title: "CTFtime Global Team Ranking",
    description: "Profil rekam jejak keikutsertaan turnamen kompetitif tim BDCA pada kompetisi Capture The Flag nasional dan dunia.",
    url: "https://ctftime.org/team/bdca",
    category: "Competition",
    status: "online",
    statusLabel: "Public Link",
    tags: ["Global Rank", "CTFtime", "Tournament Stats"],
    icon: "trophy"
  },
  {
    id: "cyber-lab",
    title: "BDCA VulnLab & Practice Sandbox",
    description: "Infrastruktur simulasi penetrasi jaringan dan vulnerable machines terisolasi untuk latihan offensive dan defensive security.",
    url: "https://github.com/bidarcyberarmy",
    category: "Training and Lab",
    status: "internal",
    statusLabel: "Internal Lab",
    tags: ["Virtual Lab", "CTF Practice", "Security Sandbox"],
    icon: "terminal"
  },
  {
    id: "community-portal",
    title: "BDCA Community Discord & Network",
    description: "Sentral koordinasi anggota, sesi diskusi teknis, tanya jawab bimbingan materi, dan pengumuman kegiatan.",
    url: "https://discord.gg/bdca",
    category: "Community",
    status: "online",
    statusLabel: "Community Channel",
    tags: ["Mentorship", "Community", "Announcements"],
    icon: "message-square"
  }
];
