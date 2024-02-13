"use client";
import { delay, motion } from "framer-motion";

const SayHello = () => {
  const text = "Hello";

  return (
    <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-8xl">
      {text.split("").map((item, idx) => {
        return (
          <motion.div
            key={idx}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              repeat: Infinity,
              delay: idx * 0.1,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            {item}
          </motion.div>
        );
      })}
    </div>
  );
};

export default SayHello;
