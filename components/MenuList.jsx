"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const links = [
  {
    id: 1,
    url: "/",
    title: "Home",
  },
  {
    id: 2,
    url: "/about",
    title: "About me",
  },
  {
    id: 3,
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    id: 4,
    url: "/contact",
    title: "Contact",
  },
];

const MenuList = ({ setIsOpen }) => {
  const router = useRouter();
  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: (time) => ({
      x: 0,
      opacity: 1,
      transition: { delay: time * 0.2 },
    }),
  };

  return (
    <motion.div
      variants={listVariants}
      initial="closed"
      animate="opened"
      className="absolute z-[55] top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl"
    >
      {links?.map(({ id, url, title }, idx) => {
        return (
          <motion.div
            key={id}
            variants={listItemVariants}
            initial="closed"
            animate="opened"
            custom={idx}
          >
            <Link href={url} onClick={() => setIsOpen(false)}>
              {title}
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default MenuList;
