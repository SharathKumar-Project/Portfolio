import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import gemini_logo from "../assets/projects/download.jpeg";

export const profile_content = `I am a passionate full stack developer with expertise in full stack development, specializing in React with Redux for robust front-end solutions and Next.js for efficient server-side rendering. On the backend, I excel in Node.js and Express, utilizing MongoDB for effective data management. I have hands-on experience with AWS for scalable cloud solutions, and I'm proficient in Git/GitHub for version control, along with Docker for streamlined deployment processes." My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const about_text = `I'm a dedicated Full stack developer, specializing in ReactJS with Redux for dynamic interfaces and Node.js with Next.js for server-side development. Skilled in HTML5, CSS/CSS3, and responsive design, I ensure optimal user experiences across devices. I excel in JavaScript for interactive features and DOM manipulation, and I leverage Express to build robust APIs. I'm proficient in Bootstrap, Material UI, and Tailwind CSS for UI components. Experienced in Git/GitHub, CI/CD pipelines, AWS, and Docker for efficient development and deployment. I thrive in collaborative, agile environments, solving complex problems with a passion for continuous learning and innovation. Beyond coding, I enjoy staying active, exploring new tech, and contributing to open-source projects.`;

export const icons = [
  { name: "React", iconImage: "reactjs" },
  { name: "Next.js", iconImage: "nextjs2" },
  { name: "Node.js", iconImage: "nodejs" },
  { name: "JavaScript", iconImage: "js" },
  { name: "HTML5", iconImage: "html5" },
  { name: "CSS3", iconImage: "css3" },
  { name: "GitHub", iconImage: "github" },
  { name: "MongoDB", iconImage: "mongodb" },
  { name: "AWS", iconImage: "aws" },
  { name: "Docker", iconImage: "docker" },
  { name: "Redux", iconImage: "redux" },
  { name: "Material UI", iconImage: "materialui" },
  { name: "Bootstrap 5", iconImage: "bootstrap5" },
  { name: "Serverless", iconImage: "serverless" },
  // { name: "Storybook", iconImage: "storybook" },
  { name: "Tailwind CSS", iconImage: "tailwindcss" },
  { name: "Zod", iconImage: "zod" },
  { name: "Postman", iconImage: "postman" },
  { name: "Figma", iconImage: "figma" },
  { name: "Git", iconImage: "git" },
  { name: "EC2", iconImage: "ec2" },
];

export const experiences = [
  {
    year: "08/2024 - present",
    role: "Full Stack Web Developer",
    company: "ACL Digital - Eli Lilly (Client)",
    description: "",
  },
  {
    year: "11/2023 - 04/2024",
    role: "Full Stack Web Developer",
    company: "rite Software Solutions and Services - OLA (Client)",
    description: `Skilled in building interactive web applications using ReactJS and Redux for seamless user experiences. Proficient in modern web technologies like HTML5, CSS3, and JavaScript (ES6) for creating visually appealing interfaces. Implemented client-side validation techniques for data integrity and user security. Familiar with state management patterns like Context API and Recoil, enhancing scalability. Experienced in creating dynamic web experiences with efficient navigation using routing techniques. Developed reusable components to maintain clean and scalable codebases. Proficient in React Features, Components, Hooks, Routing, AUTH, and security. Strong understanding of ECMAScript specifications, promises, and data binding. Optimized application performance using techniques like code splitting and memoization. Collaborated with backend teams to integrate frontend applications with RESTful APIs. Proficient in Git and GitHub for effective version control and collaboration.`,
    project_link: `https://chat.olakrutrim.com`,
    technologies: [
      "NextJs",
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "ReactJS",
      "Context API",
      "Node.js",
      "Express.js",
      "AWS",
      "Docker",
      "Git",
      "GitHub",
    ],
  },
  {
    year: "06/2023 - 8/2023",
    role: "Software Developer",
    company: "entomo formerly KPISOFT",
    description: `Designed and developed user interfaces for web applications using Angular. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: [
      "Angular",
      "JavaScript (ES6)",
      "HTML",
      "CSS",
      "AntD",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    year: "03/2020 - 05/2023",
    role: "Software Engineer",
    company: "Autozo Technologies Pvt Ltd",
    description: `Developed applications using HTML, CSS, JavaScript, and various programming languages. Proficient in debugging to identify and fix errors efficiently. Designed user-friendly software interfaces to simplify management tasks. Created responsive UI using HTML, CSS, and Bootstrap, ensuring seamless adaptability across devices. Contributed to all stages of software development, from planning to maintenance. Actively participated in code review meetings, providing feedback on bugs and suggesting solutions. Evaluated and implemented new technologies to improve development efficiency. Ensured adherence to coding standards for robust software solutions. Collaborated effectively with cross-functional teams to deliver high-quality products.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export const projects = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      "HTML",
      "CSS",
      "Material-Ui",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "git",
      "github",
      "Aws",
      "Docker",
    ],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React.js", "Express", "node.js", "mySQL"],
  },
  {
    title: "Gemini Clone",
    image: gemini_logo,
    description:
      "An interactive clone of the Gemini website, built using React for frontend interactivity. This project includes features like responsive design, dynamic content rendering, and CSS for styling. It aims to replicate the core functionalities of Gemini's interface, providing a seamless user experience.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "nodejs"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const contact = {
  contact_text: `Thank you for visiting my portfolio! Whether you have questions, inquiries, or just want to say hello, please don't hesitate to reach out. Your feedback on my work or website is highly valued; please share your thoughts using the below links. I look forward to hearing from you!`,
  contact_email: "sharathkumarv47@gmail.com",
  social_media: {
    linkedinUrl: "https://www.linkedin.com/in/sharath-kumar-v-216bb9217",
    instagramUrl:
      "https://www.instagram.com/sharath_kumar_v_47/?igsh=ZXVxeTR2YXphbTY0",
    githubUrl: "https://github.com/Sharath-Kumar-V-47/Projects.git",
    twitterUrl: "https://x.com/SharathKum94518",
  },
};
