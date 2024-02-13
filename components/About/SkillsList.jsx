"use client";
import { motion } from "framer-motion";

const SkillsList = ({ skillsRef, skillsInView }) => {
  return (
    <motion.div
      initial={{ x: "-1000px" }}
      animate={skillsInView ? { x: 0 } : {}}
      transition={{ delay: 0.4 }}
      className="flex flex-wrap gap-4"
      ref={skillsRef}
    >
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        HTML
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        CSS
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        SASS
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        JavaScript
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        React
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Next.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Auth.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        TailwindCSS
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Node.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Express.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        MongoDB
      </div>
    </motion.div>
  );
};

export default SkillsList;
