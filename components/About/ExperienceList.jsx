"use client";
import { motion } from "framer-motion";
import ExperienceListItem from "./ExperienceListItem";

const experiences = [
  {
    id: 1,
    title: 'Student at GOIT "Full Stack Developer"',
    desc: "I took a 10-month full-stack developer training at Goit it-school.",
    date: "2022-2023",
    company: "GoIT",
  },
  {
    id: 2,
    title: 'Junior Front-end Developer at "Hiweber"',
    desc: "I work as a front-end developer at Hiweber web studio. The studio specializes in developing websites and web applications.",
    date: "2023-Present",
    company: "Hiweber",
  },
];

const ExperienceList = ({ experienceRef, experienceRefInView }) => {
  return (
    <motion.div
      initial={{ x: "-1000px" }}
      animate={experienceRefInView ? { x: 0 } : {}}
      transition={{ delay: 0.4 }}
      className=""
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
