import {
    mobile,
    backend,
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
    docker,
    Gao,
    spark,
    hotstar,
    blog,
    Ecomm,
    Donation,
    Ieditor,
    Criminal,
    threejs,
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
      title: "Next.JS Developer",
      icon: web,
    },
    {
      title: "React.JS  Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: mobile,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "GaoTek Inc.",
      icon: Gao,
      iconBg: "#383E56",
      date: "May 2023 - August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Spark Foundation",
      icon: spark,
      iconBg: "#383E56",
      date: "April 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "Hotstar Clone",
      description:
        "I have cloned frontend of popular video and sports streaming Platform hotstar",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: hotstar,
      source_code_link: "https://github.com/Randhiranju/Hotstar_clone",
    },
    {
      name: "Hunting Code",
      description:
        "Next.Js application that enables users to search for blogs on popular web development, content writing etc tools.",
      tags: [
        {
          name: "Next Js",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/Randhiranju/NextJs-BlogWebsite",
    },
    {
      name: "E-commerce",
      description:
        "It is a react based dummy E-commerce website in which I mainly focused on backend properties like signup,login,delete product, update product etc.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Node.Js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: Ecomm,
      source_code_link: "https://github.com/Randhiranju/React_E-Commerce",
    },
    {
      name: "Donation",
      description:
        "It's a donation website for different charity funds, user can post a charity scheme after admin approval, pay of a scheme etc.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "SQL",
          color: "pink-text-gradient",
        },
      ],
      image: Donation,
      source_code_link: "https://github.com/Randhiranju/Charity-website",
    },
    {
      name: "Image Editor",
      description:
        "This website provides basic functionality to upload image edit it's basic properties and download",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Ieditor,
      source_code_link: "https://github.com/Randhiranju/Image_editor",
    },
    {
      name: "Criminal Detection System",
      description:
        "It's capable of detecting criminal and displaying details of his/her crime via image or video servillance using Neural Network",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "CNN",
          color: "pink-text-gradient",
        },
      ],
      image: Criminal,
      source_code_link: "https://github.com/Randhiranju/Criminal-Detection-System",
    },
  ];
  
  export { services, technologies, experiences, projects };