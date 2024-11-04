import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import placeholder from "../assets/placeholder.png";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiPhpLine,
  RiJavascriptFill,
  RiAdvertisementLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Reagan J Luyinda",
  role: "Front-End Developer",
  subheading:
    "With 2 years of Front-End development experience, I build efficient, scalable web and Mobile applications. I am on the job hunt and always curious about interesting projects.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website built with React. I was practicing product management, state management, empty and active states and responsiveness.",
    techStack: ["React", "Typescript", "Tailwind CSS", "Context API"],
    imgSrc: project1,
    link: "https://desserts-shop-eshop.vercel.app/",
  },
  {
    id: 2,
    title: "Snap webpage",
    description:
      "A landing page, built with React, Typescript and Tailwind CSS. I was checking out routing concepts and media queries",
    techStack: ["React", "Typescript", "Tailwind CSS"],
    imgSrc: project2,
    link: "https://snap-webpage.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["React", "Javascript", "Tailwind CSS", "GSAP"],
    imgSrc: project3,
    link: "https://my-portfolio-reaganluyinda.vercel.app/",
  },
  {
    id: 4,
    title: "Visa Application System",
    description:
      "A full stack System with user authentication, database managment and CRUD functions.",
    techStack: ["PHP", "MySQL", "Bootstrap"],
    imgSrc: project4,
    link: "",
  },
  {
    id: 5,
    title: "Movie Scrapping Tool",
    description:
      "A Scrapping tool scrapping top 100 movie titles from the movie sites and storing them in a database.",
    techStack: ["Bootstrap", "Python", "Mysql"],
    imgSrc: project5,
    link: "",
  },
  {
    id: 6,
    title: "SwiftRide App",
    description:
      "This was a ride sharing App on which I co-worked on the frontend by developing various screens for the App  .",
    techStack: ["ReactNative", "Typescript", "Tailwind CSS"],
    imgSrc: project6,
    link: "",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Typescript",
    icon: <RiJavascriptFill className="text-blue-500" />,
  },
  {
    name: "MySql",
    icon: <RiDatabaseLine className="text-green-600" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400" />,
  },
  {
    name: "PHP",
    icon: <RiPhpLine className="text-pink-400" />,
  },
  {
    name: "React Native",
    icon: <RiReactjsLine className="text-pink-400" />,
  },
  {
    name: "GIT",
    icon: <RiGitBranchLine className="text-red-500" />,
  },
  {
    name: "Canva",
    icon: <RiAdvertisementLine className="text-orange-400" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
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
    techStack: ["HTML", "CSS", "Canva", "MySQL", , "Excel"],
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
    duration: " 2024",
    description:
      "Graduated with honors in Information System and Technology, majoring in software development. Completed a final year project on decentralised technology (A web based decentralized digital evidence presevation system).",
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
