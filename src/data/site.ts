export interface SiteConfig {
  name: string;
  shortName: string;
  fullName: string;
  established: string;
  motto: string;
  mentor: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    github: string;
    instagram: string;
    discord?: string;
    linkedin?: string;
    twitter?: string;
    ctftime?: string;
    email: string;
  };
  contact: {
    address: string;
    email: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "BDCA",
  shortName: "BDCA",
  fullName: "Bina Darma Cyber Army",
  established: "2009",
  motto: "Learn, Connect & Shared Experience",
  mentor: "Aan Restu Mukti, S.Kom., M.Kom",
  tagline: "Independent Cyber Security Community & Research Lab",
  description: "BDCA is an independent cyber security and IT community founded in 2009 at Universitas Bina Darma, focusing on ethical hacking, CTF competitions, and vulnerability research.",
  url: "https://bidarcyberarmy.org",
  ogImage: "/assets/logo.webp",
  links: {
    github: "https://github.com/bidarcyberarmy",
    instagram: "https://www.instagram.com/bidarcyberarmy/",
    discord: "https://discord.gg/bdca",
    linkedin: "https://linkedin.com/company/bdca",
    twitter: "https://x.com/bidarcyberarmy",
    ctftime: "https://ctftime.org/team/bdca",
    email: "contact@bidarcyberarmy.org"
  },
  contact: {
    address: "Cyber Security Research Lab, Universitas Bina Darma, Palembang, Indonesia",
    email: "contact@bidarcyberarmy.org"
  }
};
