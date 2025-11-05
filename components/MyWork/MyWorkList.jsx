"use client";
import { motion } from "framer-motion";
import MyWorkListItem from "./MyWorkListItem";

const items = [
  {
    id: 1,
    color: "from-red-300 to-gray-300",
    title: "X2Bike",
    desc: "Developed a website for renting electric bikes + developed an admin panel for easy management of the site and orders.",
    img: "/portfolio/x2bike_eu.png",
    link: "https://x2bike.com",
  },
  {
    id: 2,
    color: "from-gray-300 to-red-300",
    title: "X2Bike ",
    desc: "Developed a website for the purchase of electric bicycles for leasing",
    img: "/portfolio/x2bike_pl.png",
    link: "https://x2bike.pl",
  },
  {
    id: 3,
    color: "from-red-300 to-blue-300",
    title: "Compliwiser",
    desc: "Develope a landing page AML company",
    img: "/portfolio/compliwiser.png",
    link: "https://complywiser.com",
  },
  {
    id: 4,
    color: "from-blue-300 to-violet-300",
    title: "Foodprint",
    desc: "Developed an online store for the sale of food printers. Admin panels were also developed for convenient site management.",
    img: "/portfolio/foodprint.png",
    link: "https://foodprint.si",
  },
  {
    id: 5,
    color: "from-violet-300 to-purple-300",
    title: "Audiparts",
    desc: "Developed an online store for the sale of auto parts for Audi. An admin panel was also implemented for convenient site management.",
    img: "/portfolio/audiparts.png",
    link: "https://audiparts.com.ua",
  },
  {
    id: 6,
    color: "from-violet-300 to-purple-300",
    title: "Nasti.fit fitness",
    desc: "Developed a website with online payment, wayforpay, with the integration of the Telegram API. We also developed an admin panel to track all transactions.",
    img: "/portfolio/nastifit.png",
    link: "https://nasti.fit",
  },
];

const MyWorkList = ({ x }) => {
  return (
    <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
      <motion.div style={{ x }} className="flex items-center">
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
        {items.map((item) => (
          <MyWorkListItem key={item.id} item={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default MyWorkList;
