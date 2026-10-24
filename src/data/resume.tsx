import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Frederico Morais",
  initials: "FM",
  url: "https://fredmorais.dev",
  location: "Aveiro, Portugal",
  locationLink: "https://www.google.com/maps/place/Aveiro,+Portugal",
  description:
    "Management graduate focused on digital business, infrastructure, and practical software solutions.",
  summary:
    "I combine a management background with hands-on technical work. I currently build tools and processes for production control and logistics at Forvia, and I run a self-hosted infrastructure lab spanning virtualization, networking, automation, observability, and backups.",
  avatarUrl: "/me.jpeg",
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "work@fredmorais.dev",
    social: {
      website: {
        name: "Website",
        url: "https://fredmorais.dev",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:work@fredmorais.dev",
        icon: Icons.email,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/fredmorais",
        icon: Icons.linkedin,

        navbar: true,
      },
      Github: {
        name: "GitHub",
        url: "https://github.com/fredmorais",
        icon: Icons.github,

        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Forvia",
      location: "São João da Madeira",
      title: "Production Control & Logistics Trainee",
      logoUrl: "./forvia.jpeg",
      start: "Jun 2025",
      end: "Present",
      highlights: [
        "Designed and developed a warehouse management tool on SAP MII, improving product searchability and FIFO compliance for 70+ SKUs and scaling to approximately 170.",
        "Built Excel tools that automate recurring daily and weekly production-control tasks, recovering approximately three hours per month.",
        "Established the first standardized tracking, documentation, and coordination processes during the ramp-up of a new production line.",
      ],
    },
    {
      company: "Mastercard",
      location: "Lisbon",
      title: "Associate Consultant Intern",
      logoUrl: "./mastercard.jpeg",
      start: "Jun 2023",
      end: "Aug 2023",
      highlights: [
        "Analyzed and delivered weekly reports for three clients in the German market.",
        "Designed business solutions aligning client requirements with Mastercard's product portfolio.",
        "Managed client requests and supported timely project completion by identifying weekly requirements and objectives.",
      ],
    },
    {
      company: "Academia 100%",
      location: "Lisbon",
      title: "Mathematics Tutor",
      logoUrl: "./academia-100.jpeg",
      start: "Sep 2021",
      end: "Jun 2022",
      highlights: [
        "Oversaw the academic performance of five students and communicated results from weekly assessments.",
        "Developed study plans in group sessions that contributed to overall grade improvements of 20%.",
      ],
    },
  ],
  education: [
    {
      school: "Nova School of Business and Economics ",
      href: "https://www.novasbe.unl.pt/en/",
      degree: "Master's in Management · Digital Business",
      logoUrl: "./nova-sbe.jpeg",
      location: "Lisbon",
      start: "Sep 2022",
      end: "Jan 2024",
      highlights: [
        "GPA: 17/20",
        "Thesis: Smartcart — full-stack development of a Progressive Web App",
      ],
    },
    {
      school: "Nova School of Business and Economics",
      href: "https://www.novasbe.unl.pt/en/",
      degree: "Bachelor's in Management",
      logoUrl: "./nova-sbe.jpeg",
      location: "Lisbon",
      start: "Sep 2019",
      end: "Jun 2022",
      highlights: ["GPA: 15/20", "Member of Nova Tech Club"],
    },
  ],
  skillGroups: [
    {
      label: "Infrastructure",
      skills: [
        "Proxmox",
        "Docker",
        "Linux",
        "TrueNAS",
        "Ansible",
        "Traefik",
        "Networking",
      ],
    },
    {
      label: "Development",
      skills: [
        "Python",
        "FastAPI",
        "SQL",
        "PostgreSQL",
        "Supabase",
        "JavaScript",
        "React",
        "REST APIs",
        "Git",
      ],
    },
    {
      label: "Languages",
      skills: ["Portuguese (native)", "English (fluent)"],
    },
  ],
  projects: [
    {
      title: "GTA VI Marketing map",
      href: "https://leonidamarket.ing",
      image: "/leonida-marketing.jpeg",
      links: [
        {
          type: "Website",
          href: "https://leonidamarket.ing",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/fredmorais/leonida-marketing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      description:
        "Leonida Marketing helps the community track the GTA VI campaign as it comes to life in cities around the world—from billboards and murals to custom vehicles and branded locations. The responsive, map-focused app uses MapLibre GL JS, OpenFreeMap vector tiles, OpenStreetMap data, and YAML content files, with no backend required.",
      technologies: ["React", "Cloudflare Pages"],
    },
    {
      title: "Sonae Hackathon",
      image: "/sonae.jpeg",
      description:
        "In collaboration with Nova SBE and Sonae, the ADP program was a venture between 24 Sonae employees and 15 Nova SBE that started with a hackathon to find new market opportunities.",
      technologies: ["Hackathon"],
      links: [
        {
          type: "Linkedin",
          href: "https://www.linkedin.com/feed/update/urn:li:share:7003444474697670658/",
          icon: <Icons.linkedin className="size-3" />,
        },
      ],
    },
  ],
  certificates: [
    {
      name: "CS50 Introduction to AI",
      issuer: "HarvardX",
    },
    { name: "Excel Expert", issuer: "Microsoft" },
    {
      name: "CS50 Introduction to Computer Science",
      issuer: "HarvardX",
    },
  ],
} as const;
