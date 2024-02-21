"use client";
import { motion } from "framer-motion";
import MyWorkListItem from "./MyWorkListItem";

const items = [
  {
    id: 1,
    color: "from-red-300 to-red-300",
    title: "Complywiser",
    desc: "Developed a website for a company that optimizes the company's AML costs.",
    img: "https://res.cloudinary.com/dehupkc5s/image/upload/v1708550444/complywicer/Screenshot_2024-02-21_at_23.19.21_ytt3ap.png",
    link: "https://www.complywiser.com/en",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "Online store of home textiles KoalaDream",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://res.cloudinary.com/dehupkc5s/image/upload/v1707840143/portfolio/1704383914379_fwnpk3.jpg",
    link: "https://rosshaluz.github.io/koaladream-frontend/",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Task Pro",
    desc: "A web application for organizing and managing tasks and projects.",
    img: "https://res.cloudinary.com/dehupkc5s/image/upload/v1707840107/portfolio/1692956105553_gaz3hm.jpg",
    link: "https://rosshaluz.github.io/todo-list-frontend/auth",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "YourPet",
    desc: "Web application for adding and searching for pets.",
    img: "https://res.cloudinary.com/dehupkc5s/image/upload/v1707840090/portfolio/Screenshot_2024-02-13_at_18.01.13_ppzlkd.png",
    link: "https://rosshaluz.github.io/command-repo-yourpet-frontend/",
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
