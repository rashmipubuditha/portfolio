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
  logo: "",
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
    "I am an experienced programmer with expertise in Full Stack Development, Machine Learning, and DevOps. Passionate about Artificial Intelligence and Data Science, I am driven by a constant desire to learn, innovate, and enhance my skill set. I thrive on solving complex problems, exploring new technologies, and building impactful solutions.",
    // second paragraph
    "With a growth-oriented mindset, I am eager to contribute my knowledge, collaborate with industry professionals, and embrace opportunities that allow me to learn, create, and make a meaningful impact.",
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
    target: 90,
  },
  {
    skill: "MySql",
    target: 90,
  },
  {
    skill: "ML",
    target: 80,
  },
  {
    skill: "AWS",
    target: 80,
  },
  {
    skill: "LLM",
    target: 80,
  },
  {
    skill: "DevOps",
    target: 80,
  },
  {
    skill: "Cloud",
    target: 80,
  },
  // {
  //   skill: "ReactJs",
  //   target: 90,
  // },
  // {
  //   skill: "Java",
  //   target: 80,
  // },
];

export const skillsData = [
  {
    skill: "Full Stack Web Development",
    tools: "HTML, CSS, JavaScript, React, Flask, RESTful API, MySQL, MongoDB",
  },
  {
    skill: "Machine Learning & Deep Learning",
    tools: "TensorFlow, PyTorch, Scikit-learn, Statistics",
  },
  {
    skill: "Artificial Intelligence",
    tools:
      "LLMs, Generative AI, RAG, YOLO, Image Processing, OpenCV, Langchain",
  },
  {
    skill: "Data Analysis",
    tools: "NumPy, Pandas, Matplotlib, Jupyter Notebook",
  },

  {
    skill: "DevOps & Cloud",
    tools: "Docker, CI/CD, AWS, Linux, Bash Scripting",
  },
  { skill: "Version Control ", tools: "Git, GitHub, GitLab" },
  { skill: "R Programming", tools: "Data Science & Statistics" },
];

// === === === \My Skills === === === //

// --------------------------------------- Services --------------------------------------- //

// === === === My Services === === === //
export const myServices = [
  {
    service:
      "AWS Cloud Practitioner Essentials by Amazon web Service- Coursera 2024",
    iconName: "lnr lnr-code",
    // description:
    //   "AWS Cloud Practitioner Essentials by Amazon web Service- Coursera 2024",
  },
  {
    service: " AWS Educate Badges by Amazon Web Service",
    iconName: "lnr lnr-code",
    description:
      "Introduction to Cloud 101 \nGetting Started with Compute \nGetting Started with Serverless",
  },
  {
    service:
      " DevOps Beginners to Advanced with Projects- Udemy 2024 (Ongoing)",
    iconName: "lnr lnr-code",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service:
      " Generative AI with Large Language Models by Deepearning.ai, AWS- Coursera 2025",
    iconName: "lnr lnr-code",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service:
      " Machine learning specialization by deeplearning.ai- Coursera 2023",
    iconName: "lnr lnr-code",
    description:
      " Supervised Machine Learning: Regression and Classification \nAdvanced Learning Algorithms \nUnsupervised Learning, Recommenders \nReinforcement Learning",
  },

  {
    service:
      " Java Programming and Software Engineering Fundamentals Specialization by Duke University- Coursera",
    iconName: "lnr lnr-code",
    description:
      "• Programming Foundations with JavaScript, HTML, and CSS \nJava Programming: Solving Problems with Software, Arrays, Lists, and Structured Data, Principles of Software Design, Build a Recommendation System",
  },
  {
    service:
      " Programming for Everybody , Python Data Structures by University of Michigan- Coursera 2020",
    iconName: "lnr lnr-code",
    description:
      "• Programming for Everybody: Getting Started with Python \nPython Data Structures",
  },
  {
    service:
      " Neural Networks and Deep Learning by deeplearning.ai- Coursera 2024",
    iconName: "lnr lnr-code",
    // description:
    //   "Lorem ipsum dolor sit amet consectetur, poie adipisicing elit. Reiciendis ipsam nesciunt sint neque praesentium a poie elit adipisicing elit !",
  },
  {
    service: " Introduction to Cloud Computing by IBM- Coursera 2024",
    iconName: "lnr lnr-code",
    // description:
    //   " Supervised Machine Learning: Regression and Classification, Advanced Learning Algorithms, Unsupervised Learning, Recommenders, Reinforcement Learning",
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
        "• Contributed to the end-to-end development of a business management system for VK Enterprises PVT LTD, covering business analysis, development, and deployment using Flask and React, MySQL \n• Contributed to the development of 'CBL Connect Plus', a web-based ERP system for CBL Distributions using React, Flask, and MySQL. \n• AI-powered customer support chatbot development for a Salesforce application using Python, RASA framework, React, and Flask",
    },
    {
      years: "Jul 2023 - Oct 2023",
      event: "Intern - Electronics Engineer",
      location: "Vega Innovations Pvt Ltd, Colombo 10",
      description:
        "• Real-time CAN Data Logger Development (Group) - STM32 MCU Programming, PCB Designing. \n• CAN Data Decoding Algorithm Development (Individual) - Python, DSA, NumPy, Pandas",
    },
    {
      years: "Jun 2022 - Aug 2022",
      event: "Intern - Electrical and Electronics Engineer",
      location: "KBSL Information Technologies Limited, Colombo 02 ",
      description:
        "• Worked at Bharti Airtel Sri Lanka Data Center - Internet Service Provider Support team\n• Data Communication and Networking , Network Devices Configuration , Network Monitoring and Reporting ,Cisco Networking",
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
