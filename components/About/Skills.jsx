"use client";
import { useRef } from "react";
import ScrollSVG from "./ScrollSVG";
import SkillsList from "./SkillsList";
import { motion, useInView } from "framer-motion";

const Skills = () => {
  const skillsRef = useRef();
  const skillsInView = useInView(skillsRef, { margin: "-50px", once: true });

  return (
    <div className="flex flex-col gap-12 justify-center" ref={skillsRef}>
      <motion.h2
        className="font-bold text-2xl"
        initial={{ x: "-300px" }}
        animate={skillsInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        SKILLS
      </motion.h2>
      <SkillsList skillsRef={skillsRef} skillsInView={skillsInView} />
      <ScrollSVG />
    </div>
  );
};

export default Skills;
