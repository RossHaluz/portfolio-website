"use client";
import { motion } from "framer-motion";
import ExperienceListItem from "./ExperienceListItem";

const experiences = [
  {
    id: 1,
    title: "Full Stack Development Student at GoIT",
    desc: "Completed an intensive 10-month full-stack development program at GoIT, gaining hands-on experience with modern web technologies and project-based learning.",
    date: "2022–2023",
    company: "GoIT",
  },
  {
    id: 2,
    title: "Junior Front-End Developer at Hiweber",
    desc: "Develop and maintain responsive, high-performance websites and web applications for clients across various industries. Collaborate with designers and backend developers to deliver pixel-perfect, scalable solutions.",
    date: "2023–Present",
    company: "Hiweber",
  },
  {
    id: 3,
    title: "Full Stack Developer (Freelance)",
    desc: "Design and implement full-stack web applications for private clients. Responsible for architecture, UI/UX development, backend integration, and deployment using modern frameworks and cloud platforms.",
    date: "2024–2025",
    company: "Freelance",
  },
  {
    id: 4,
    title: "Front-End Developer at Baradata",
    desc: "Contribute to the development of advanced front-end interfaces and internal tools for data-driven applications. Focus on code quality, performance optimization, and seamless user experience.",
    date: "2025–2025",
    company: "Baradata",
  },
];


const ExperienceList = ({ experienceRef, experienceRefInView }) => {
  return (
    <motion.div
      initial={{ x: "-1000px" }}
      animate={experienceRefInView ? { x: 0 } : {}}
      transition={{ delay: 0.4 }}
      className="flex flex-col-reverse"
    >
      {experiences?.map(({ id, title, desc, date, company }, idx) => {
        return (
          <ExperienceListItem
            key={id}
            title={title}
            desc={desc}
            date={date}
            company={company}
            idx={idx}
          />
        );
      })}
    </motion.div>
  );
};

export default ExperienceList;
