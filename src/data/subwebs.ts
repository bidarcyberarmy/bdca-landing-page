import { siteConfig } from './site';

type SubWeb = {
  title: string;
  description: string;
  category: "Community" | "Credential" | "Portal" | "Competition" | "Training and Lab";
} & ({ status: "online"; url: string } | { status: "maintenance" | "internal" });

export const subWebs: SubWeb[] = [
  {
    title: "We Are BDCA (Members & Showcase)",
    description: "Browse member profiles, achievements, and projects from the BDCA community.",
    url: "https://weare.bidarcyberarmy.org",
    category: "Community",
    status: "online"
  },
  {
    title: "BDCA Credential & Cert Verification",
    description: "Verify BDCA membership, skills, and workshop certificates.",
    url: "https://cert.bidarcyberarmy.org",
    category: "Credential",
    status: "online"
  },
  {
    title: "BDCA Official Web & Knowledge Base",
    description: "Visit BDCA’s main website for security research documentation and public repositories.",
    url: siteConfig.url,
    category: "Portal",
    status: "online"
  },
  {
    title: "CTFtime Global Team Ranking",
    description: "Follow BDCA’s record in national and international Capture the Flag competitions.",
    url: siteConfig.links.ctftime,
    category: "Competition",
    status: "online"
  },
  {
    title: "BDCA VulnLab & Practice Sandbox",
    description: "Practice offensive and defensive security in isolated labs with simulated networks and intentionally vulnerable machines.",
    category: "Training and Lab",
    status: "internal"
  },
  {
    title: "BDCA Community Discord & Network",
    description: "Connect with members, ask technical questions, and keep up with BDCA events.",
    url: siteConfig.links.discord,
    category: "Community",
    status: "online"
  }
];
