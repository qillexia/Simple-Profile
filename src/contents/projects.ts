import { Project } from "@/types";


export const projects: Project[] = [
  {
    title: "CV Generator App",
    description: "CV Generator using PHP and TCPDF to export resumes as PDF.",
    technologies: ["Php", "Tcpdf Library", "Bootstrap"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/cv-generator.png",
  },
  {
    title: "Simple AI Chatbot",
    description: "Groq AI-powered chatbot developed using React JSX.",
    technologies: ["React", "Node.js", "Groq API"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/simple-chatbot.png",
  },
  {
    title: "Employee Identity",
    description:
      "A desktop-based employee data management application developed using Java and NetBeans.",
    technologies: ["Java", "NetBeans", "MySQL", "Swing GUI"],
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
    image: "/projects/data-karyawan.png",
  },
  
];