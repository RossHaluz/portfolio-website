import Image from "next/image";

const MyWorkListItem = ({ item }) => {
  const { color, title, img, link, desc } = item;
  return (
    <div
      className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`}
    >
      <div className="flex flex-col gap-8 text-white w-[90%] md:w-2/4">
        <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">{title}</h1>
        <div className="relative w-full h-56  md:h-64 lg:h-[350px]">
          <Image src={img} alt="" fill />
        </div>
        <p className="w-full lg:text-lg">{desc}</p>
        <a href={link} target="_blanck" className="flex justify-end">
          <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
            See Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default MyWorkListItem;
