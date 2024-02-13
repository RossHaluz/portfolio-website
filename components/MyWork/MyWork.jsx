"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MyWorkTitle from "./MyWorkTitle";
import MyWorkList from "./MyWorkList";

const MyWork = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="h-[600vh] relative" ref={ref}>
      <MyWorkTitle />
      <MyWorkList x={x} />
    </div>
  );
};

export default MyWork;
