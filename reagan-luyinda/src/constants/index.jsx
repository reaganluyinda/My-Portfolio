import project1 from "../assets/desserts.png";
import project2 from "../assets/snap.png";
import project3 from "../assets/iraport.png";
import project4 from "../assets/gold.png";
import project5 from "../assets/solelabs.png";
import chuco from "../assets/chuco.png";
import placeholder from "../assets/placeholder.png";

import {
  RiJavascriptLine,
  RiReactjsLine,
  RiPhpLine,
  RiJavascriptFill,
  RiComputerLine,
  RiNodejsLine,
  RiNextjsLine,
  RiTailwindCssLine,
  RiSettings5Line,
} from "@remixicon/react";
import { RiDatabaseLine, RiGitBranchLine } from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Reagan J Luyinda",
  role: "Full-Stack Developer",
  subheading:
    "Full Stack Developer dedicated to building scalable, high-performance and responsive web and mobile applications that blend elegant code with practical performance. I turn concepts into real digital experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "Church Connect",
    description:
      "This is a web application built with the MERN stack deployed on Vercel. The app aims to connect church leaders and members, facilitate event management, and newcomer access and communication. Currently in development phase.",
    techStack: ["Next.js", "Typescript", "Node.js", "MongoDB", "Tailwind CSS"],
    imgSrc: chuco,
    link: "https://church-connect-neon.vercel.app/",
    codeLink: "https://github.com/reaganluyinda/ChurchConnect.git",
  },
  {
    id: 2,
    title: "Dessert Shop",
    description:
      "A featured e-commerce website built with React. I was exploring product management, state management, empty and active states, cart UI, and responsive design across devices.",
    techStack: ["React", "Typescript", "Tailwind CSS", "Context API"],
    imgSrc: project1,
    link: "https://desserts-shop-eshop.vercel.app/",
    codeLink: "https://github.com/reaganluyinda/Desserts-eshop.git",
  },
  {
    id: 3,
    title: "Ira Edwin Portfolio",
    description:
      "A freelancer portfolio website showcasing my clients work. Its responsive design ensures a seamless experience across devices. This project improved my skills in routing, page transitions, media queries, and creative layout design.",
    techStack: ["Next.js", "Typescript", "Tailwind CSS", "Framer Motion"],
    imgSrc: project3,
    link: "https://ira-port.vercel.app/",
    codeLink: "https://github.com/reaganluyinda/ira-port.git",
  },
  {
    id: 4,
    title: "Sole Labs",
    description:
      "A responsive website. Through this project, I deepened my understanding of routing in Next.js and implemented responsive layouts with Tailwind's utility-first approach. Deployed on Vercel, it served as a practical exercise in building modern, production-ready web applications.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imgSrc: project5,
    link: "https://www.solelabs.site/",
    codeLink: "https://github.com/reaganluyinda/Sole-Labs.git",
  },
  {
    id: 5,
    title: "Gold Millennium Uganda",
    description:
      "A landing page for Gold dealership business. I explored easy navigation for user inquries and product image views, Structured content for better search engine visibility and responsive design for various devices.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imgSrc: project4,
    link: "https://gold-millennium.vercel.app/",
    codeLink: "https://github.com/reaganluyinda/Gold-Millennium.git",

    // title: "Visa Application System",
    // description:
    //   "A full stack System with user authentication, database managment and CRUD functions.",
    // techStack: ["PHP", "MySQL", "Bootstrap"],
    // imgSrc: project4,
    // link: "https://github.com/reaganluyinda/Visa-application-system.git",
  },
  {
    id: 6,
    title: "Snap webpage",
    description:
      "A landing page, built with React, Typescript and Tailwind CSS. I explored react concepts, component based architecture and responsive design. I also practiced tailwind CSS for styling.",
    techStack: ["React", "Typescript", "Tailwind CSS"],
    imgSrc: project2,
    link: "https://snap-webpage.vercel.app/",
    codeLink: "https://github.com/reaganluyinda/Snap-webpage.git",
  },
];

export const SKILLS = [
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine className="text-orange-600" />,
  },
  {
    name: "Typescript",
    icon: <RiJavascriptFill className="text-blue-500" />,
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine className="text-green-400" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "MongoDB",
    icon: <RiComputerLine className="text-indigo-600" />,
  },
  {
    name: "GIT",
    icon: <RiGitBranchLine className="text-red-500" />,
  },
  {
    name: "REST APIs",
    icon: <RiSettings5Line className="text-blue-500" />,
  },

  {
    name: "React Native",
    icon: <RiReactjsLine className="text-pink-400" />,
  },

  {
    name: "MySql",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssLine className="text-teal-400" />,
  },
  {
    name: "PHP",
    icon: <RiPhpLine className="text-pink-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2025 - ",
    role: "Freelance Web Developer",
    company: "Sole Labs",
    description:
      "Developing and maintaining web and mobile applications using Typescript, Next.js, React Native,Tailwind CSS and Framer.",
    techStack: [
      "Typescript",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "Framer",
      "Node.js",
    ],
  },
  {
    yearRange: "2024",
    role: "Junior Front-End Developer",
    company: "Codeplay ug",
    description:
      "Co-worked in developing and maintaining web and mobile applications using Typescript, React.js, React Native and Tailwind CSS. Collaborated with Team leads and project managers to define project requirements and timelines.",
    techStack: ["Typescript", "React.js", "React Native", "Tailwind CSS"],
  },
  {
    yearRange: "2022 - 2023",
    role: "IT Officer",
    company: "UNASO",
    description:
      "I ensured the company website was updated with the oragnisation's important days and activities. I also did graphics designing for the organisation's social media and workshops",
    techStack: ["HTML", "CSS", "Canva", "MySQL", "Excel"],
  },
  {
    yearRange: "2021 - 2022",
    role: "IT and Sales",
    company: "Winter Computers",
    description: "Updated and maintained company and computer sales.",
    techStack: ["Adobe", "Canva"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Information Systems and Technology",
    institution: "Makerere University University",
    duration: " 2025",
    description:
      "Graduating in 2026 with honors in Information System and Technology, majoring in software development. Completing a final year project on decentralised technology (A web based decentralized digital evidence presevation system).",
  },
  {
    id: 2,
    degree: "Certificate of Completion in Frontend Engineering",
    institution: "Codeplay ug",
    duration: "2024",
    description:
      "Focused on UI/UX design, Frontend technologies forexample React, React Native, Tailwind and Typescript.",
  },
  {
    id: 3,
    degree: "Certificate of Completion in graphics design",
    institution: "Rana Labs",
    duration: "2023",
    description:
      "Earned a certification in basic graphics designing using Adobe illustrator and Canva.",
  },
];

export const TESTIMONIAL = {
  name: "Calvin Kitara",
  title: "CTO, UNASO",
  quote:
    "Working with Reagan was a game-changer. His devotion to software development and IT as a whole helped us scale our product with ease. His attention to detail and passion for quality are unmatched.",
  image: placeholder,
};
