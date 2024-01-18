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
    php,
    laravel
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
      name: "PHP",
      icon: php,
    },
    {
      name: "Laravel",
      icon: laravel,
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
      title: "Junior Software Developer",
      company_name: "Kevi Tech",
      icon: kevi,
      iconBg: "#E6DEDD",
      date: "May 2021 - Feb 2022",
      points: [
        "Integrated Tailwind UI seamlessly with React Flow to create visually appealing and user-friendly interfaces for customizable UI user journeys",
        "Worked on various PHP projects, including website development and database management, gaining hands-on experience with PHP, HTML, CSS, and JavaScript.",
        "Implemented responsive web designs using CSS3 and media queries, ensuring optimal user experiences across various devices",
        "Integrated Tailwind UI seamlessly with React Flow to create visually appealing and user-friendly interfaces for customizable UI user journeys.",
        "Implemented Email.js in the web Application to streamline order processing and collect customer feedback, demonstrating effective use of communication and feedback systems"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "SME Tech Solutions",
      icon: sme,
      iconBg: "#383E56",
      date: "March 2022 - Present",
      points: [
        "Spearheaded the development of responsive and visually appealing web application using HTML5, CSS3, PHP, Laravel, BootStrap, JavaScript ensuring optimal user experience and building large-scale web application",
        "Pioneered data-driven social media strategies and guided the team in implementing highly engaging campaigns on Facebook, Instagram, and Email, leading to a 60% boost in customer acquisition and a 25% increase in conversion rates",
        "Developed code inside the GitHub to discuss and update with teammates, ensuring a collaborative and efficient development process.",
        "Applied Bootstrap and TailwindCss for responsive design, ensuring a consistent user experience across devices and Proficiently utilized Rust, TypeScript, HTML5, CSS3 and WordPress for building scalable applications",
      "Implemented secure and efficient back-end functionalities, including user authentication, order processing, and inventory management, contributing to a 20% increase in overall platform performance."
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