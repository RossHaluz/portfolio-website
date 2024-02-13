"use client";
import { useRef } from "react";
import ExperienceList from "./ExperienceList";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const experienceRef = useRef();
  const experienceRefInView = useInView(experienceRef, {
    margin: "-50px",
    once: true,
  });

  return (
    <div className="flex flex-col gap-12 justify-center" ref={experienceRef}>
      <motion.h2
        initial={{ x: "-300px" }}
        animate={experienceRefInView ? { x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        EXPERIENCE
      </motion.h2>
      <ExperienceList
        experienceRef={experienceRef}
        experienceRefInView={experienceRefInView}
      />
    </div>
  );
};

export default Experience;
