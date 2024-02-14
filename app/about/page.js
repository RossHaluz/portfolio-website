"use client";
import Biography from "@/components/About/Biography";
import BrainSVG from "@/components/About/BrainSVG";
import Experience from "@/components/About/Experience";
import Skills from "@/components/About/Skills";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full pb-10"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER  */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER  */}
        <div className="p-4 md:px-8 md:py-12 lg:px-15 lg:py-20 flex flex-col gap-24 md:gap-32 lg:gap-48 lg:w-2/4 lg:pr-8">
          {/* BIOGRAPHY  */}
          <Biography />

          {/* SKILLS  */}
          <Skills />

          {/* EXPERIENCE  */}
          <Experience />
        </div>

        <BrainSVG scrollYProgress={scrollYProgress} />
      </div>
    </motion.div>
  );
}
