import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    unity,
    livi,
    kevi,
    sme,
    cpg,
    SEO,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experiences",
    },
    {
    id: "project",
    title: "Project",
  },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
   {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Web Developer",
      company_name: "Unity",
      icon: unity,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Utilized Figma for comprehensive wireframing of an ECommerce website, implemented successfully on a Malaysia online platform in 2020",
        "Developed a fully functional website capable of product management using Laravel, MySQL, PHP Node.js and JavaScript",
        "Produced high quality frontend designs, prioritizing attentions to details for optimal user experiences on various devices",
        "Gained exposure to version control systems like Git for collaborative development workflows.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Kevi Tech",
      icon: kevi,
      iconBg: "#E6DEDD",
      date: "May 2021 - Feb 2022",
      points: [
        "Developed and maintained responsive websites for clients using HTML, CSS, JavaScript, and various front-end frameworks.",
        "Implemented SEO best practices to improve website visibility and ranking on search engines.",
        "Debugged and resolved cross-browser compatibility issues to ensure a seamless user experience.",
        "Collaborated with the marketing team to integrate tracking and analytics tools for client websites.",
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "SME Tech Solutions",
      icon: sme,
      iconBg: "#383E56",
      date: "March 2022 - Present",
      points: [
        "Monitored and responded to comments, messages, and mentions, fostering a positive online community for clients.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Optimized on-page elements, including meta tags, headings, and content, to improve organic search rankings.",
        "Oversaw social media marketing campaigns, including the creation of content and advertising.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CPG Global",
      description:
        "CPG is a full-scope Certification Body Accredited by JAS-ANZ (Joint Accreditation System – Australia New Zealand), SAC (Singapore Accreditation Council),  EIAC (Emirates International Accreditation Centre, SANAS (South African National System),  and by APMG International as an Accredited Certification Body.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: cpg,
      source_code_link: "www.cpg.global",
    },
    {
      name: "SEO Matters",
      description:
        "At SEO Matters, our mission is to help small and medium businesses experience their full growth potential. SEO Matters provides proper digital service strategies through building strong collaborations",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: SEO,
      source_code_link: "https://github.com/",
    },
    {
      name: "Livability Services",
      description:
        "We have enthusiastic, dedicated, and energetic staff from different backgrounds, who are ready to provide high-quality, respectful care in all settings including your own house, S.I.L, STAA or in the community.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: livi,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };