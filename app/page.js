import Image from "next/image";

Image;

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row px-4 md:px-8 lg:px-15 h-full">
      {/* IMAGE CONTAINER  */}
      <div className="h-1/2 md:h-full md:w-1/2 relative">
        <Image src="/hero.png" alt="Hero bg" fill className="object-contain" />
      </div>

      {/* TEXT CONTAINER  */}
      <div className="h-1/2 md:h-full md:w-1/2 flex flex-col gap-8 items-center justify-center">
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
