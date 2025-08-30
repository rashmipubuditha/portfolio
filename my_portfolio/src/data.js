// --------------------------------------- Images --------------------------------------- //
// Hero Image
// import heroImg from "./imgs/hero.png";
import heroImg from "/Rashmi.png";
// About Image
import aboutImg from "/Rashmi.png";

// Project Images
import app1 from "/work-1.jpg";
import app2 from "/work-2.jpg";
import web2 from "/work-3.jpg";
import web1 from "/work-4.jpg";
import app3 from "/work-5.jpg";
import web3 from "/work-6.jpg";
import design1 from "/work-7.jpg";
import design2 from "/work-8.jpg";

// Clients Images
import client1 from "/work-1.jpg";
import client2 from "/work-1.jpg";
import client3 from "/work-1.jpg";
import client4 from "/work-1.jpg";

// --------------------------------------- Colors and Mode --------------------------------------- //

// Provide theme controler : true , false
export const addThemeControler = true;

// default Mode: dark , light
export const defaultMode = "dark";

// default color is the first color : 1 / 12
export const defaultColor = 10;

// all colors = 12 colors
export const colors = [
  { color: "#4885cc" },
  { color: "#16badb" },
  { color: "#d63384" },
  { color: "#fd7e14" },
  { color: "#6f42c1" },
  { color: "#20c997" },
  { color: "#0d6efd" },
  { color: "#17baa5" },
  { color: "#dc3545" },
  { color: "#7b0447ff" },
  { color: "#8ad429" },
  { color: "#bd37bc" },
];

// --------------------------------------- Header --------------------------------------- //
export const headerData = {
  logo: "Rashmi",
  showLinks: false, // true to show navlinks, false to hidden
};

// --------------------------------------- Home --------------------------------------- //

// === === === Hero Data === === === //

export const heroData = {
  name: "Rashmi Pubuditha",
  job_title_1: "Full-Stack Developer",
  job_title_2: "ML Enthusiast",
  heroImage: heroImg,
  cvFilePath: "/Rashmi_Pubuditha_CV.pdf", // <-- use leading slash and include extension
};
export const mySocialLinks = [
  {
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/rashmi-pubuditha-956717211",
  },
  {
    icon: "fa-brands fa-dribbble",
    link: "#",
  },
  {
    icon: "fa-brands fa-github",
    link: "https://github.com/rashmipubuditha",
  },
  // {
  //   icon: "fa-brands fa-twitter",
  //   link: "#",
  // },
];
// === === === \Hero Data === === === //

// --------------------------------------- About --------------------------------------- //

// === === === My About Me === === === //
export const aboutMe = {
  about_image: aboutImg,
  name: "Rashmi Pubuditha",
  job: "Full-Stack Developer",
  paragraphs: [
    // first paragraph
    "I am an experienced and skilled programmer passionate about Software Development, ML, and DevOps. I focus on continuously growing by learning new technologies and improving my skills. I am eager to find opportunities where I can contribute, learn, and grow within the industry",
    // second paragraph
    // "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui repellat reiciendis, quas harum accusantium incidunt tenetur? Nisi voluptas, corporis nulla aliquam animi possimus. Recusandae labore doloremque officia, vero odit quaerat!",
  ],
};
// === === === \My About Me === === === //

// === === === My About Info === === === //
export const aboutInfo = [
  {
    icon: "lnr lnr-envelope",
    info: "rashmi99gamage@gmail.com",
  },
  {
    icon: "lnr lnr-location",
    info: "158/5A, Hiripitiya Road, Pannipitiya, Sri Lanka",
  },
  {
    icon: "lnr lnr-checkmark-circle",
    info: "Available to work",
  },
  {
    icon: "lnr lnr-phone-handset",
    info: "+94 711515981",
  },
];
// === === === \My About Info === === === //

// === === === Fun Facts === === === //
export const funFacts = [
  {
    icon: "lnr lnr-calendar-full",
    funFact: "Years Experience",
    targetValue: 1,
  },
  {
    icon: "lnr lnr-layers",
    funFact: "projects done",
    targetValue: 10,
  },
  // {
  //   icon: "lnr lnr-smile",
  //   funFact: "happy clients",
  //   targetValue: 341,
  // },
  // {
  //   icon: "lnr lnr-clock",
  //   funFact: "working hours",
  //   targetValue: 2132,
  // },
];
// === === === Fun Facts === === === //

// === === === My Skills === === === //
export const skills = [
  {
    skill: "Python",
    target: 90,
  },
  {
    skill: "ReactJs",
    target: 85,
  },
  {
    skill: "MySql",
    target: 90,
  },
  {
    skill: "Java",
    target: 80,
  },
];
// === === === \My Skills === === === //

// --------------------------------------- Services --------------------------------------- //

// === === === My Services === === === //
export const myServices = [
  {
    service: "Database Management",
    iconName: "lnr lnr-database",
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Business Analysis",
    iconName: "lnr lnr-pie-chart",
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Creative Design",
    iconName: "lnr lnr-magic-wand",
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Web Development",
    iconName: "lnr lnr-code",
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "Marketing",
    iconName: "lnr lnr-bullhorn",
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: "App Development",
    iconName: "lnr lnr-smartphone",
    description:
      "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
];
// === === === \My Services === === === //

// --------------------------------------- Resume --------------------------------------- //

// === === === My Resume === === === //
export const myResumeContent = {
  // Education timelien
  education: [
    {
      years: "Nov 2019 - Aug 2024",
      event: "BSc (Hons) in Electrical and Electronic Engineering",
      location: "University of Peradeniya",
      description:
        "GPA: 3.25/4.0\n Technicals: Machine Learning, Image and Video Coding, Optimization, Industrial Statistics, Operations Research",
    },
    {
      years: "2010 - 2018",
      event: "Visakha Vidyalaya",
      location: "Colombo 04",
      description:
        " G.C.E. Advanced Level Examination- 2018 / 2A’S B\nG.C.E. Ordinary Level Examination- 2015 / 9AS",
    },
  ],

  // Experience timeline
  experience: [
    {
      years: "Oct 2024 - Present",
      event: "Software Engineer",
      location: "Adveccio Pvt Ltd, Colombo 04",
      description:
        "Contributed to the end-to-end development of a business management system for VK Enterprises PVT LTD, covering business analysis, development, and deployment using Flask and React, MySQL \nContributed to the development of 'CBL Connect Plus', a web-based ERP system for CBL Distributions using React, Flask, and MySQL. \nAI-powered customer support chatbot development for a Salesforce application using Python, RASA framework, React, and Flask\nRaw material consumption prediction system for a manufacturing company based on historical data. (Python,Flask, React, SARIMA, LSTM, MS SQL)",
    },
    {
      years: "Jul 2023 - Oct 2023",
      event: "Intern - Electronics Engineer",
      location: "Vega Innovations Pvt Ltd, Colombo 10",
      description:
        "Real-time CAN Data Logger Development (Group) - STM32 MCU Programming, PCB Designing. \nCAN Data Decoding Algorithm Development (Individual) - Python, DSA, NumPy, Pandas",
    },
    {
      years: "Jun 2022 - Aug 2022",
      event: "Intern - Electrical and Electronics Engineer",
      location: "KBSL Information Technologies Limited, Colombo 02 ",
      description:
        "Worked at Bharti Airtel Sri Lanka Data Center - Internet Service Provider Support team\nData Communication and Networking , Network Devices Configuration , Network Monitoring and Reporting ,Cisco Networking",
    },
  ],
};
// === === === \My Resume === === === //

// --------------------------------------- Portfolio --------------------------------------- //

// === === === My Projects === === === //

// filters data and all is fixed
export const filterKeys = ["all", "web", "app", "design"];

// projects data
export const myProjects = [
  {
    title:
      "Improving Vehicle Number Plate Visibility via Low-Resolution Video Enhancement",
    category: "web",
    image: web2,
    caption:
      "Develop an automated multi-model algorithm to enhance image visibility by integrating Image Processing and Super Resolution techniques (SRCNN and ESRGAN), Image Restoration, Motion Deblurring, and Tilt Correction.",
    // date: "23 May, 2024",
    // client: "Envato",
    technologies: "Python, NumPy, OpenCv, Tensorflow, Pytorch, Jupyter",
    external_link: "#",
  },

  {
    title: " AI-Driven Defect Detection of Flawless Ceramic Products",
    category: "app",
    image: app2,
    caption:
      " Develop a real-time YOLOv8-based model for detecting and classifying defects (cracks, iron spots, and pinholes) in ceramic products manufactured at Noritake Company. (Data collection, annotation, image processing, training, and testing using NVIDIA Jetson).",
    // date: "23 May, 2021",
    client: "Noritake Porceylein Company",
    technologies: "YOLOv8, Python, NumPy, OpenCv",
    external_link: "#",
  },

  {
    title: " Image and Video Compression System",
    category: "app",
    image: app3,
    caption:
      " Develop a hybrid video codec incorporating DCT, quantization, prediction, entropy coding, and decoding featuring block-based motion prediction and optimized for both fixed and flexible bandwidth transmission",
    // date: "23 May, 2021",
    // client: "Envato",
    technologies: "Python, NumPy, OpenCv",
    external_link: "#",
  },

  {
    title: "Designing Treadmill Dashboard",
    category: "web",
    image: design1,
    caption:
      "Develop a Python-based GUI application that displays real-time workout metrics, including speed, distance, calories burned, and step rate.",
    // date: "23 May, 2021",
    // client: "Envato",
    technologies: "Python",
    external_link: "#",
  },

  {
    title: " IoT-based Smart Medicine Pill Dispenser",
    category: "design",
    image: web3,
    caption:
      " Dispensing medication according to a pre-set schedule, providing reminders and alerts, and control using wifi via a mobile app.",
    // date: "23 May, 2021",
    // client: "Envato",
    technologies: "Arduino, ESP 32, Google Firebase",
    external_link: "#",
  },

  {
    title: " Hospital management system for COVID-19",
    category: "design",
    image: design2,
    caption:
      " Develop a C program for patient registration, counting patients, and managing COVID-19 hospital operations",
    // date: "23 May, 2021",
    // client: "Envato",
    technologies: "C",
    external_link: "#",
  },

  // {
  //   title: "Project Title",
  //   category: "app",
  //   image: app1,
  //   caption:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
  //   date: "23 May, 2021",
  //   client: "Envato",
  //   technologies: "HTML, CSS, JS, PHP",
  //   external_link: "#",
  // },

  // {
  //   title: "Project Title",
  //   category: "web",
  //   image: web3,
  //   caption:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit accusamus sit et dolorem explicabo numquam iure temporibus debitis asperiores in blanditiis placeat, odit beatae ab necessitatibus nostrum eveniet voluptate corporis?",
  //   date: "23 May, 2021",
  //   client: "Envato",
  //   technologies: "HTML, CSS, JS, PHP",
  //   external_link: "#",
  // },
];
// === === === \My Projects === === === //

// --------------------------------------- Testimonial --------------------------------------- //

export const myClients = [
  {
    name: "John Doe",
    img: client1,
    rate: 4,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
  {
    name: "John Doe",
    img: client2,
    rate: 5,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
  {
    name: "John Doe",
    img: client3,
    rate: 3,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
  {
    name: "John Doe",
    img: client4,
    rate: 4,
    jobTitle: "Business",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illo ducimus consectetur fugiat itaque, voluptas nostrum quia ad, quaerat exercitationem iure aspernatur maxime, excepturi minus adipisci impedit numquam. Odio, quidem.",
  },
];

// --------------------------------------- Contact --------------------------------------- //

// === === === My Contact Info === === === //
export const myContactInfo = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Location",
    info: {
      line_1: "158/5A, Hiripitiya Road, pannipitiya",
      line_2: "Sri Lanka",
    },
  },
  // {
  //   icon: "fa-solid fa-clock",
  //   title: "Open Hours",
  //   info: {
  //     line_1: "Sunday-Friday:",
  //     line_2: "11:00 AM - 2300 PM",
  //   },
  // },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    info: {
      line_1: "rashmi99gamage@gmail.com",
      line_2: "",
    },
  },
  {
    icon: "fa-solid fa-phone",
    title: "Call",
    info: {
      line_1: "+94 711515981",
      line_2: "",
    },
  },
];
// === === === \My Contact Info === === === //
