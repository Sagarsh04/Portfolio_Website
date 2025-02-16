import {
  // mobile,
  frontend,
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
  // figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  Lottery,
  Hotstar,
  // jobit,
  // tripguide,
  ecommerece,
  threejs,devops,sm,bootstrap,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Front-End Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title:"Devops",
    icon: devops,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    // company_name: "Starbucks",
    icon: sm,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    // company_name: "Tesla",
    icon: sm,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    // company_name: "Shopify",
    icon: sm,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    // company_name: "Meta",
    icon: sm,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sagar is a quick learner with strong full-stack skills, delivering optimized, user-friendly, and high-performance applications",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Sagar has been amazing! His expertise in React and Node.js ensures efficient, scalable applications.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sagar’s commitment to learning and improving is remarkable. His ability to turn ideas into seamless user experiences is impressive.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },

];

const projects = [
  {
    name: "Lottery Game Application",
    description:
      "The Lottery Game Application is a web-based platform built with React.js, MongoDB, and Tailwind CSS. It allows users to participate in an online lottery by purchasing tickets, entering draws, and checking results. The system ensures fair play using a random number generation algorithm and provides a seamless user experience with a modern UI.",
    tags: [
      {
        name: "react",
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
    image: Lottery,
    //source_code_link: "https://github.com/",
  },
  {
    name: "Hotstar Clone",
    description:
      "Web-based streaming platform built using HTML, CSS, React.js, and REST API. It allows users to browse, stream, and search for movies, TV shows, and sports content. The application fetches data from a backend REST API to display trending content, categories, and user preferences while providing a smooth and interactive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
    ],
    image: Hotstar,
    // source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Website",
    description:
      "The E-Commerce Website is a full-stack web application built using HTML, CSS, React.js, and REST API. It provides a seamless online shopping experience where users can browse products, add items to their cart, and complete purchases. The platform features dynamic product listings, and a user-friendly interface designed for smooth navigation",
    tags: [
      {
        name: "frontend",
        color: "blue-text-gradient",
      },
      {
        name: "backend",
        color: "green-text-gradient",
      },
      {
        name: "database",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerece,
    // source_code_link: "https://github.com/",
  },
];

export { services,technologies,experiences,  testimonials, projects };
