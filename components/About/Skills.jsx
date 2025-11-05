"use client";
import { useRef } from "react";
import ScrollSVG from "./ScrollSVG";
import SkillsList from "./SkillsList";
import {  useInView } from "framer-motion";

const Skills = () => {
  const skillsRef = useRef();
  const skillsInView = useInView(skillsRef);

  return (
    <div className="flex flex-col gap-12 justify-center" ref={skillsRef}>
      <h2
        className="font-bold text-2xl"
        initial={{ x: "-300px" }}
        animate={skillsInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        SKILLS
      </h2>
      <SkillsList skillsRef={skillsRef} skillsInView={skillsInView} />
      <ScrollSVG />
    </div>
  );
};

export default Skills;
