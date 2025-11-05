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
        JavaScript
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        React
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Next.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Node.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Express.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Koa.js
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        GraphQL
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Socket.io
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        RxJS
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        Jest
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        MongoDB
      </div>
      <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black hover:border hover:border-solid hover:border-black">
        PostgresQL
      </div>
    </motion.div>
  );
};

export default SkillsList;
