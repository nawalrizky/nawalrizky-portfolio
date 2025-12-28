export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tags: string[];
  description: string;
  features?: string[];
  link?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Lustrum XI KMTSL",
    category: "Event Platform",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754831471/lustrumm_ngxdil.png",
    tags: ["Typescript", "Next.js"],
    description: "The Lustrum XI KMTSL X CIA website is a dynamic platform designed to streamline the operations of a major annual event, delivering an engaging and user-friendly experience. I contributed to developing six distinct landing pages to showcase various event aspects, four tailored registration forms with intuitive workflows, and interactive dashboards for users and admins to monitor activities in real-time.",
    link: "https://lustrum-kmtsl.com",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754831471/lustrumm_ngxdil.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754831994/lus_qs99pn.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754833874/cia24_wrwgq7.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754832726/sbc24_p5e7ph.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754832898/fcec24_nmk9uu.png"
    ]
  },
  {
    id: 2,
    title: "Civil In Action 2025",
    category: "Event Platform",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754925402/cialogin25_fmntld.png",
    tags: ["Typescript", "Next.js"],
    description: "Civil In Action (CIA) 2025 is a dynamic platform developed to manage registrations and promote a series of events including seminars and competitions. Features multiple responsive landing pages, intuitive online registration forms, and integrated dashboards for both admin and users.",
    link: "https://civilinaction.com/",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754925402/cialogin25_fmntld.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754925414/cia25_sdpzkx.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754925403/sbc25_bmyoj6.png"
    ]
  },
  {
    id: 3,
    title: "PDDikti",
    category: "Educational Platform",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754927955/pddikti25_jggthk.png",
    tags: ["Typescript", "Next.js", "Vite", "React.js"],
    description: "Contributed to the PDDIKTI website, optimizing university comparison features with advanced filtering and developing a CMS for the front page to streamline content updates.",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754927955/pddikti25_jggthk.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754927945/pdikti25_u4ygg9.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1754927945/univ25_jpvlfa.png"
    ]
  },
  {
    id: 4,
    title: "Heavenly Sigending",
    category: "Creative Website",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755000266/forlika25_btvol7.png",
    tags: ["Next.js", "TypeScript"],
    description: "A serene and immersive digital experience capturing the essence of heavenly beauty. This project combines elegant design with modern web technologies to create a peaceful and inspiring online presence.",
    link: "https://heavenly-sigending.com",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755000266/forlika25_btvol7.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755000177/forlika3_hsll8s.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755000157/forlika1_dezw9n.png",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755000150/forlika2_gwpnfq.png"
    ]
  },
  {
    id: 5,
    title: "Finnovate",
    category: "Fintech Platform",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755003126/finnovate25_eao5wz.png",
    tags: ["React Native", "MySQL", "Node.js"],
    description: "A financial innovation platform delivering advanced financial solutions through cutting-edge technology. Features secure transactions, real-time updates, and diverse financial tools.",
    link: "#",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755003126/finnovate25_eao5wz.png"
    ]
  },
  {
    id: 6,
    title: "Paradisonesia",
    category: "Travel Dashboard",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755007368/Paradisonesia_1_qpzsxx.png",
    tags: ["Vue.js", "TailwindCSS"],
    description: "A comprehensive travel and adventure agent dashboard serving as a centralized platform to streamline travel package management, bookings, and customer interactions.",
    link: "#",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755007368/Paradisonesia_1_qpzsxx.png"
    ]
  },
  {
    id: 7,
    title: "Gamaexpo",
    category: "Event Platform",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755347535/gamaexpo23_sr6ham.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    description: "The Gadjah Mada Entrepreneur Expo (GME) website, developed for Universitas Gadjah Mada. Features detailed event info, Business Case Competition details, and SME promotion.",
    link: "#",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755347535/gamaexpo23_sr6ham.png"
    ]
  },
  {
    id: 8,
    title: "Komatik UGM",
    category: "Community Website",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755346984/komatik25_bjy9fo.png",
    tags: ["Next.js", "TailwindCSS"],
    description: "A landing page for Komunitas Mahasiswa TIK UGM showcasing the community’s vision, mission, member profiles, and activities.",
    link: "#",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755346984/komatik25_bjy9fo.png"
    ]
  },
  {
    id: 9,
    title: "Wani Ternak",
    category: "E-Commerce",
    image: "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755874106/waniternak27_11zon_mkpqoy.jpg",
    tags: ["Next.js", "Sanity CMS"],
    description: "A specialized e-commerce platform for livestock enthusiasts, showcasing a comprehensive list of products including poultry feed, chickens, and veterinary medicines.",
    link: "https://www.waniternak.com/",
    gallery: [
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755874106/waniternak27_11zon_mkpqoy.jpg",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755874119/waniternak25_11zon_qavn4q.jpg",
      "https://res.cloudinary.com/dzd8kk9p5/image/upload/v1755874105/waniternak26_11zon_cbc3uo.jpg"
    ]
  },
  {
    id: 10,
    title: "Biduk-Biduk Tourism",
    category: "Tourism Platform",
    image: "/images/bidukbiduk.png",
    tags: ["Next.js", "TypeScript"],
    description: "A comprehensive tourism platform for the Biduk-Biduk region in East Kalimantan. The ecosystem consists of two main applications: a public-facing frontend for tourists and a CMS for administration. Key features include an interactive GIS map for exploring destinations, an AI-powered chatbot for visitor assistance, and integrated website analytics to track engagement.",
    features: [
      "Interactive GIS Map",
      "AI Chatbot Assistant",
      "Dual Application System (Frontend + CMS)",
      "Integrated Analytics"
    ],
    link: "https://www.bidukbiduk.com/",
    gallery: [
      "/images/bidukbiduk.png",
      "/images/bidukbiduk2.png",
      "/images/bidukbiduk3.png",
      "/images/bidukbiduk4.png"
    ]
  }
];
