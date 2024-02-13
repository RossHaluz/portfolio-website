"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row gap-4 pb-6 md:pb-0 md:items-center md:justify-center px-4 md:px-8 lg:px-15 h-full">
        {/* IMAGE CONTAINER  */}

        <div className="relative w-full h-1/2 md:w-1/2 md:h-full">
          <Image
            src="/hero.png"
            alt="Hero bg"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT CONTAINER  */}
        <div className="flex flex-col gap-8  w-full items-center justify-center h-1/2 md:w-1/2 md:h-full">
          {/* TITLE  */}
          <h1 className="text-4xl md:text-6xl font-bold w-full">
            Full Stack JavaScript Developer
          </h1>
          {/* DESCRIPTION  */}
          <p className="md:text-xl">
            My name is Rostyslav Galuzynskyi, I am a full-stack developer. I
            specialize in developing websites, CRM systems, and web
            applications. With experience in front-end and back-end
            technologies, I can create customized solutions with a visually
            appealing interface.
          </p>
          {/* BUTTONS  */}
          <div className="flex gap-4 items-center w-full">
            <button
              type="button"
              className="p-4 rounded ring-1 ring-black bg-black text-white"
            >
              View My Work
            </button>
            <button type="button" className="p-4 rounded ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
