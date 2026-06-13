export type Project = {
  id: string;
  title: string;
  category: "UI/UX" | "Software Engineering" | "Documentation" | "Data Analysis" | "Academic Project";
  description: string;
  tech: string[];
  image: string;
  details: {
    problem: string;
    solution: string;
    role: string;
    tools: string[];
    achievements: string[];
    competencies: string[];
    link?: string;
  };
};

const img = (q: string) => `https://images.unsplash.com/${q}?auto=format&fit=crop&w=1200&q=80`;

export const projects: Project[] = [
  {
    id: "customania",
    title: "Customania Mobile Application",
    category: "UI/UX",
    description: "A mobile app for custom merchandise ordering with real-time preview and design tools.",
    tech: ["Figma", "UX Research", "Prototyping"],
    image: img("photo-1512941937669-90a1b58e7e9c"),
    details: {
      problem: "MSME custom apparel businesses lacked an intuitive ordering flow that lets customers personalize products before checkout.",
      solution: "Designed an end-to-end mobile experience with live design preview, modular customization, and streamlined payment.",
      role: "Lead UI/UX Designer — research, wireframes, hi-fi prototype, usability testing.",
      tools: ["Figma", "FigJam", "Maze", "Notion"],
      achievements: ["+38% task success in usability tests", "Reduced checkout steps from 7 to 4", "Adopted as MVP blueprint"],
      competencies: ["Design systems", "User research", "Prototyping", "Usability testing"],
      link: "#",
    },
  },
  {
    id: "merchlen",
    title: "Merchlen Mobile Application",
    category: "UI/UX",
    description: "Marketplace concept for local merch creators with discovery, wishlist, and creator profiles.",
    tech: ["Figma", "Design System", "Prototyping"],
    image: img("photo-1556761175-5973dc0f32e7"),
    details: {
      problem: "Local creators had no centralized platform that highlighted brand identity and storytelling.",
      solution: "Crafted a brand-forward marketplace with curated drops, creator pages, and social proof.",
      role: "UI/UX Designer — visual design, design tokens, interactive prototype.",
      tools: ["Figma", "Adobe Illustrator"],
      achievements: ["Awarded best concept in design sprint", "Reusable component library", "100+ screens delivered"],
      competencies: ["Visual design", "Branding", "Interaction design"],
    },
  },
  {
    id: "apm",
    title: "ERP Asset Performance Monitoring (APM)",
    category: "UI/UX",
    description: "Internship project at PT Petrokimia Gresik — monitoring dashboard for plant asset KPIs.",
    tech: ["System Analysis", "ERP", "Dashboard"],
    image: img("photo-1551288049-bebda4e38f71"),
    details: {
      problem: "Maintenance teams needed real-time visibility into asset health and downtime metrics.",
      solution: "Defined data flow, KPI hierarchy, and dashboard wireframes adopted into the company ERP module.",
      role: "System Analyst Intern — requirement gathering, BPMN, UAT support.",
      tools: ["MS Visio", "Excel", "SAP", "Figma"],
      achievements: ["Cut report prep time by 40%", "Documented 12 core processes", "Handover ready in 8 weeks"],
      competencies: ["System analysis", "Business process modeling", "Stakeholder communication"],
    },
  },
  {
    id: "veritra",
    title: "ERP VERITRA User Manual",
    category: "Documentation",
    description: "Comprehensive user manual for the VERITRA ERP module covering all operator workflows.",
    tech: ["Tech Writing", "MS Word", "Snagit"],
    image: img("photo-1499750310107-5fef28a66643"),
    details: {
      problem: "End users struggled to adopt the new ERP without standardized documentation.",
      solution: "Authored a 120-page illustrated manual with task-based chapters and annotated screenshots.",
      role: "Technical Writer — content design, screenshots, review cycles.",
      tools: ["MS Word", "Snagit", "Adobe Acrobat"],
      achievements: ["Reduced support tickets by 35%", "Adopted as onboarding standard"],
      competencies: ["Technical writing", "Information architecture"],
    },
  },
  {
    id: "siap-pintar",
    title: "LMS SIAP Pintar User Manual",
    category: "Documentation",
    description: "User-facing documentation for an LMS used by PPSDM KP2MI/BP2MI training programs.",
    tech: ["Tech Writing", "LMS", "Training"],
    image: img("photo-1522202176988-66273c2fd55f"),
    details: {
      problem: "Trainers and trainees needed a clear guide for the LMS rollout.",
      solution: "Built role-based manuals (admin, instructor, learner) with quick-start checklists.",
      role: "Technical Writer & Reviewer.",
      tools: ["Google Docs", "Loom", "Snagit"],
      achievements: ["Used in 5 training cohorts", "Translated for national rollout"],
      competencies: ["Documentation", "Training enablement"],
    },
  },
  {
    id: "employee-dashboard",
    title: "Employee Dashboard Analytics",
    category: "Data Analysis",
    description: "Interactive HR analytics dashboard surfacing headcount, attrition, and performance KPIs.",
    tech: ["Excel", "Power Query", "DAX"],
    image: img("photo-1551288049-bebda4e38f71"),
    details: {
      problem: "HR leadership lacked a single view of workforce health.",
      solution: "Modeled data, built calculated measures, and shipped an interactive dashboard.",
      role: "Data Analyst — modeling, visualization, storytelling.",
      tools: ["Excel", "Power BI", "SQL"],
      achievements: ["Surfaced 3 attrition drivers", "Monthly reporting cut by 60%"],
      competencies: ["Data modeling", "Dashboard design", "Insight communication"],
    },
  },
  {
    id: "umkm-site",
    title: "UMKM Information System Website",
    category: "Software Engineering",
    description: "Web-based information system to onboard and showcase local MSME (UMKM) businesses.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    image: img("photo-1460925895917-afdab827c52f"),
    details: {
      problem: "Local MSMEs had limited digital presence and discoverability.",
      solution: "Designed and built a directory site with admin panel, search, and category filters.",
      role: "Full-stack developer & UI designer.",
      tools: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      achievements: ["Onboarded 30+ MSMEs", "Featured in campus showcase"],
      competencies: ["Full-stack development", "CRUD design", "UI implementation"],
    },
  },
  {
    id: "thesis",
    title: "Final Project / Thesis",
    category: "Academic Project",
    description: "Capstone research applying UX methods to evaluate and redesign a public service system.",
    tech: ["UX Research", "Usability Testing", "Figma"],
    image: img("photo-1456406644174-8ddd4cd52a06"),
    details: {
      problem: "An existing public service system suffered from low task success and high abandonment.",
      solution: "Conducted mixed-method UX research, generated insights, and produced a redesign validated through testing.",
      role: "Researcher & Designer (sole author).",
      tools: ["Figma", "Maze", "SPSS", "Notion"],
      achievements: ["GPA 3.90 / Cumlaude", "Recommended for publication"],
      competencies: ["Research methodology", "Usability evaluation", "Design recommendation"],
    },
  },
];

export const skills = [
  "UI/UX Design", "UX Research", "Figma", "Web Development", "Design Thinking", "System Analyst", "Business Analyst", "Business Report",
  "Project Management", "Technical Documentation", "Data Analyst", "Laravel", "PHP", "SQL Server", "Responsive Web Design", "Microsoft Office", "Stakeholder Communication & Collaboration"
];

export const experiences = [
  { org: "Kementerian Pelindungan Pekerja Migran Indonesia (KP2MI/BP2MI)", role: "Data and Information Management (MagangHub Batch 2)", period: "November 2025 - May 2026", desc: "Managed administrative, financial, and archival data using Microsoft Excel and Google Sheets, including data processing, reporting, and visualization through pivot tables. Organized and maintained documentation records, supported the development of application user manuals and system documentation, and provided first-level IT support and troubleshooting for software and operational systems to ensure smooth business operations.", 
    tech: ["Microsoft Excel", "Data Management", "Data Visualization", "IT Support", "Technical Documentation"] },
  { org: "PT. Petrokimia Gresik (BUMN)", role: "Software Engineer Intern", period: "September 2024 - January 2025", desc: "Developed comprehensive User Manuals and Business Requirement Documents (BRD) to facilitate project planning and stakeholder alignment. Designed and enhanced UI/UX solutions for web-based systems, including the redesign of the company's ERP platform, Asset Performance Monitoring (APM), to improve user engagement and operational efficiency. Collaborated in the development of SIPASTI (Asset Planning Information System) using Laravel and SQL Server, delivering a digital solution to streamline IT asset planning and management processes.", 
    tech: ["UI/UX Design", "Business Analysis", "Laravel", "SQL Server", "ERP Systems"] },
  { org: "PT. BISA Artifisial Indonesia (BISA AI Academy)", role: "UI/UX Designer & Researcher (MSIB Batch 6)", period: "January 2024 - June 2024", desc: "Performed user research, requirements gathering, and A/B Testing to evaluate user behavior and optimize product experiences. Designed intuitive UI/UX solutions using the Design Thinking framework, formulated digital business strategies, and developed an e-commerce platform prototype focused on improving customer experience and business value. Demonstrated competencies in product design, user experience, and digital innovation, culminating in the achievement of an internationally recognized certification.", 
    tech: ["UI/UX Design", "User Research", "A/B Testing", "Design Thinking", "Product Design"] },
  { org: "Himpunan Program Studi Teknologi Informasi FV UB", role: "Project Manager In Grow Up With TI Work Program (UMKM Web Based Branding)", period: "2023", desc: "Led a website branding project for local SMEs in Malang, including a corn ice business and a flower bouquet business, to enhance their digital presence and marketing reach. Gathered business requirements through client consultations, developed project plans and timelines, coordinated UI/UX design and website development teams, and supervised testing and project evaluation to ensure successful delivery aligned with client needs and project objectives.", 
    tech: ["Project Management", "Leadership", "UI/UX Collaboration", "Client Communication", "Quality Assurance"] },
];

export const certificates = [
  {
    name: "Data & Information Management (MagangHub Batch2) at KP2MI",
    issuer: "Kementerian Pelindungan Pekerja Migran Indonesia & Kementerian Ketenagakerjaan RI",
    year: "2026",
    logo: "/Sertifmaganghub/Logo_Kementerian_Pelindungan_Pekerja_Migran_Indonesia_-_BP2MI_v2_(2024).svg.PNG",
    credentialId: "No. MN.031.035225.02.2025",
    verified: true,
    images: [
      "/Sertifmaganghub/sertifikat_d96f3fc5-e445-4c70-b831-298861895997_page-0001.jpg",
    ],
    pdf: "/Sertifmaganghub/sertifikat_d96f3fc5-e445-4c70-b831-298861895997.pdf",
  },
  {
    name: "SKK Junior Web Developer",
    issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
    year: "2025",
    logo: "/SertifBNSP/logobnsp.png",
    credentialId: "No. 62090 2513 3 0123396 2025",
    verified: true,
    images: [
      "/SertifBNSP/BNSP.jpg",
      "/SertifBNSP/BNSP2.jpg"
    ],
    pdf: "/SertifBNSP/BNSP Junior Web Developer_Muhammad Raffi Fahrezi.pdf",
  },
  {
    name: "Software Engineer (BUMN Internship) at PT. Petrokimia Gresik",
    issuer: "PT. Petrokimia Gresik",
    year: "2025",
    logo: "/Sertifpetro/Logopetro.JPEG",
    credentialId: "Verified",
    verified: true,
    images: [
      "/Sertifpetro/Muhammad Raffi Fahrezi - 223140714111274 (2)_page-0001.jpg",
    ],
    pdf: "/Sertifpetro/Muhammad Raffi Fahrezi - 223140714111274 (2).pdf",
  },
  {
    name: "Microsoft Office Desktop Application",
    issuer: "Trust Training Partners (Microsoft Partner)",
    year: "2024",
    logo: "/SertifTRUST/logotrust.jpeg",
    credentialId: "No. 24UBC12108421",
    verified: true,
    images: [
      "/SertifTRUST/TRUSTMICROSOFT.jpg",
    ],
    pdf: "/SertifTRUST/pdftrust.pdf",
  },
  {
    name: "Test of English as a Foreign Language (TOEFL) ITP",
    issuer: "ETS (Educational Testing Service)",
    year: "2024",
    logo: "/SertifTOEFL/logoets.png",
    credentialId: "No. 14128258",
    verified: true,
    images: [
      "/SertifTOEFL/TOEFL1.jpg",
      "/SertifTOEFL/TOEFL2.jpg"
    ],
    pdf: "/SertifTOEFL/TOEFL1.pdf",
  },  
  {
    name: "Test of English for International Communication (TOEIC)",
    issuer: "ETS (Educational Testing Service)",
    year: "2024",
    logo: "/SertifTOEIC/logoets.png",
    credentialId: "No. 784191",  
    verified: true,
    images: [
      "/SertifTOEIC/TOEIC.jpg",
    ],
    pdf: "/SertifTOEIC/TOEIC.pdf",  
  },
  {
    name: "UI/UX Designer & Researcher (MSIB Batch 6) at PT. BISA ARTIFISIAL INDONESIA (BISA.AI Academy)",
    issuer: "PT. BISA ARTIFISIAL INDONESIA & KEMENDIKBUDRISTEK",
    year: "2024",
    logo: "/Sertifmsib/logobisa.png",
    credentialId: "No. 8922993", 
    verified: true,
    images: [
      "/Sertifmsib/Sertif1.jpg",
      "/Sertifmsib/Sertif2.jpg",
      "/Sertifmsib/Sertif3.jpg",
      "/Sertifmsib/Sertif4.jpg",
      "/Sertifmsib/Sertif5.jpg",
      "/Sertifmsib/Sertif6.jpg",
      "/Sertifmsib/Sertif7.jpg",
      "/Sertifmsib/Sertif8.jpg",
    ],
    pdf: "/Sertifmsib/Sertifmsib.pdf",  
  },
  {
    name: "International Certificate UI/UX Designer Associate",
    issuer: "CERNS Professional Evaluation and Certification Board",
    year: "2024",
    logo: "/SertifCERNS/cernslogo.png",
    credentialId: "No. d4d56d5c-ffbd-41f7-baa4-74cd2db8bdee", 
    verified: true,
    images: [
      "/SertifCERNS/UIUX.jpg",
    ],
    pdf: "/SertifCERNS/UIUX.pdf",  
  },
  {
    name: "Master Class on Job Training : UI/UX Design & Research",
    issuer: "PT. BISA ARTIFISIAL INDONESIA (BISA.AI Academy)",
    year: "2024",
    logo: "/SertifOJT/Logobisa.png",
    credentialId: "No. 2024/618/27572",  
    verified: true,
    images: [
      "/SertifOJT/MASTERCLASSUIUX.jpg",
    ],
    pdf: "/SertifOJT/MASTERCLASSUIUX.pdf",  
  },
  {
    name: "Courses & Certifications at PT. BISA ARTIFISIAL INDONESIA (BISA.AI Academy)",
    issuer: "PT. BISA ARTIFISIAL INDONESIA (BISA.AI Academy)",
    year: "2024",
    logo: "/Sertifcourse/Logobisa.png",
    credentialId: "No. 2024/536/27572 - No. 2024/615/27572",  
    verified: true,
    images: [
      "/Sertifcourse/536_Muhammad_Raffi_Fahrezi_MEMBANGUN PROTOTYPE UX APLIKASI MOBILE.png",
      "/Sertifcourse/537_Muhammad_Raffi_Fahrezi_BASIC FIGMA PEMBUATAN UI APLIKASI MOBILE.png",
      "/Sertifcourse/540_Muhammad_Raffi_Fahrezi_Fundamental Tipografi dalam Desain Grafis.png",
      "/Sertifcourse/541_Muhammad_Raffi_Fahrezi_Membuat Design Website yang SEO Friendly.png",
      "/Sertifcourse/544_Muhammad_Raffi_Fahrezi_BASIC ADOBE PHOTOSOP CC.png",
      "/Sertifcourse/546_Muhammad_Raffi_Fahrezi_Basic 3D Modeling  Tools & Shortcut Aplikasi Blender.png",
      "/Sertifcourse/553_Muhammad_Raffi_Fahrezi_ Dasar - Dasar Animasi.png",
      "/Sertifcourse/554_Muhammad_Raffi_Fahrezi_MEMAHAMI HIERARKI VISUAL DALAM DESAIN.png",
      "/Sertifcourse/555_Muhammad_Raffi_Fahrezi_MENGEMBANGKAN MEDIA KOMUNIKASI VISUAL DENGAN MENGGUNAKAN DESAIN MULTIMEDIA.png",
      "/Sertifcourse/556_Muhammad_Raffi_Fahrezi_Membuat Desain Logo Yang Menarik Dan Sesuai Kode Etik.png",
      "/Sertifcourse/568_Muhammad_Raffi_Fahrezi_TEKNIK SURVEI KUESIONER & WAWANCARA DALAM UX RESEARCH.png",
      "/Sertifcourse/570_Muhammad_Raffi_Fahrezi_Analisis SWOT Dalam Perencanaan Bisnis Bagi Pemula.png",
      "/Sertifcourse/571_Muhammad Raffi Fahrezi_Introduction To Gamification.png",
      "/Sertifcourse/572_Muhammad_Raffi_Fahrezi_Design Thinking  Pengantar Desain Kreatif.png",
      "/Sertifcourse/594_Muhammad_Raffi_Fahrezi_Basic Video Editing Mobile Aplikasi Capcut.png",
      "/Sertifcourse/603_Muhammad_Raffi_Fahrezi_KOMUNIKASI INTERPERSONAL DALAM BISNIS.png",
      "/Sertifcourse/609_Muhammad_Raffi_Fahrezi_Implementasi Business Model Canvas (BMC) pada Bisnis F&B.png",
      "/Sertifcourse/615_Muhammad_Raffi_Fahrezi_MANAJEMEN.png",

    ],
    pdf: "/Sertifcourse/PDFCOURSE.pdf",  
  },
  {
    name: "Certificate of Attendance WEBINAR at PT. BISA ARTIFISIAL INDONESIA (BISA.AI Academy)",
    issuer: "PT. BISA ARTIFISIAL INDONESIA (BISA.AI Academy)",
    year: "2024",
    logo: "/Sertifwebinarbisai/Logobisa.png",
    credentialId: "No. 2024/4122/67276 - No. 2024/4273/67276",  
    verified: true,
    images: [
      "/Sertifwebinarbisai/4122_Muhammad_Raffi_Fahrezi_CREATIVE DESIGN FOR POSITIVE IMPACT.png",
      "/Sertifwebinarbisai/4146_Muhammad_Raffi_Fahrezi_TIPS SUKSES MENJADI CONTENT CREATOR TIKTOK.png",
      "/Sertifwebinarbisai/4154_Muhammad_Raffi_Fahrezi_EXPLAINER VIDEO ANIMATION.png",
      "/Sertifwebinarbisai/4170_Muhammad_Raffi_Fahrezi_MEMBUAT CONTENT POPULER.png",
      "/Sertifwebinarbisai/4175_Muhammad_Raffi_Fahrezi_PENTINGNYA STRATEGI BRANDING BAGI SEBUAH PRODUK & BISNIS.png",
      "/Sertifwebinarbisai/4208_Muhammad_Raffi_Fahrezi_TUTORIAL AUGMENTED REALITY.png",
      "/Sertifwebinarbisai/4210_Muhammad_Raffi_Fahrezi_STRATEGY FOR DESIGNING A BMC.png",
      "/Sertifwebinarbisai/4273_Muhammad_Raffi_Fahrezi_HISTORIES & FUTURE OF UX.png",

    ],
    pdf: "/Sertifwebinarbisai/Webinar.pdf",  
  },
  {
    name: "Webinar Speaker (Power Of UX Design In Digital Marketing)",
    issuer: "Via (Tampil ID) Platform of BISA.AI Academy",
    year: "2024",
    logo: "/SertifNarasumber/Tampil.Id.png",
    credentialId: "Verified",
    verified: true,
    images: [
      "/SertifNarasumber/Sertifikat Speaker Webinar BISA AI via Tampil ID_1743698713885.jpg",
    ],
    pdf: "/SertifNarasumber/Sertifikat Speaker Webinar BISA AI via Tampil ID_1743698713885.pdf",
  },  
  {
    name: "Webinar Speaker (Beyond Point & Badges: Gamification UI/UX Yang Interaktif)",
    issuer: "Via (Tampil ID) Platform of BISA.AI Academy",
    year: "2024",
    logo: "/SertifNarasumber/Tampil.Id.png",
    credentialId: "Verified",
    verified: true,
    images: [
      "/SertifNarasumber/Sertifikat Speaker Webinar BISA AI via Tampil ID_1743698957286.jpg",
    ],
    pdf: "/SertifNarasumber/Sertifikat Speaker Webinar BISA AI via Tampil ID_1743698957286.pdf",
  },  
];

export const achievements = [
  { title: "Project Manager — GROW UP WITH TI", desc: "Led the development of a website-based information system for local SMEs (UMKM)" },
  { title: "Staff Public Relation — IEEE UB Student Branch", desc: "Managed stakeholder communications and organized promotional events and seminars." },
  { title: "Chief Executive — IT CHARITY 2023", desc: "Led a social initiative providing English learning activities for 50+ elementary students." },
  { title: "Community & Advocacy Programs From HMPSTI", desc: "Contributed to multiple advocacy and community service initiatives to strengthen social impact." },
  { title: "Webinar Speakers Via Tampil.ID Platform Of BISA.AI Academy", desc: "Delivered UI/UX and technology-related webinar sessions twice with positive participant feedback." },
  { title: "Project Manager — E-Complaint System", desc: "Led an 8-member cross-functional team in developing a web-based complaint management system." },
];
