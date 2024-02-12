"use client";
import { motion } from "framer-motion";

const MenuButton = ({ setIsOpen, isOpen }) => {
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      className="flex flex-col w-10 h-7 justify-between relative z-50"
    >
      <motion.div
        variants={topVariants}
        animate={isOpen ? "opened" : "closed"}
        className="w-10 h-1 bg-black rounded origin-[3px]"
      ></motion.div>
      <motion.div
        variants={centerVariants}
        animate={isOpen ? "opened" : "closed"}
        className="w-8 h-1 bg-black rounded"
      ></motion.div>
      <motion.div
        variants={bottomVariants}
        animate={isOpen ? "opened" : "closed"}
        className={`h-1 bg-black rounded origin-[3px] ${
          isOpen ? "w-10" : "w-5"
        }`}
      ></motion.div>
    </button>
  );
};

export default MenuButton;
