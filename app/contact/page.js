"use client";
import Contact from "@/components/Contact/Contact";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
    >
      <Contact />
    </motion.div>
  );
}
