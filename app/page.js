import Image from "next/image";

Image;

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 px-4 md:px-8 lg:px-15 h-full">
      {/* IMAGE CONTAINER  */}

      <div className="relative row-span-1">
        <Image src="/hero.png" alt="Hero bg" fill className="object-contain" />
      </div>

      {/* TEXT CONTAINER  */}
      <div className="flex flex-col gap-8 items-center justify-center row-span-2">
        {/* TITLE  */}
        <h1 className="text-4xl md:text-6xl font-bold w-full">
          Full Stack JavaScript Developer
        </h1>
        {/* DESCRIPTION  */}
        <p className="md:text-xl">
          My name is Rostyslav Galuzynskyi, I am a full-stack developer. I
          specialize in developing websites, CRM systems, and web applications.
          With experience in front-end and back-end technologies, I can create
          customized solutions with a visually appealing interface.
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
  );
}
