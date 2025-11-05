import ScrollSVG from "./ScrollSVG";
import SignatureSVG from "./SignatureSVG";

const Biography = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      <h2 className="font-bold text-2xl">BIOGRAPHY</h2>
      <p className="text-lg">
        My name is Rostislav, and I'm a full-stack developer with more then 2 years of commercial experience. In my experience, I've worked as both a
        frontend developer and a full-stack developer. My skill set includes
        proficiency in HTML, CSS, SASS/SCSS, JavaScript, TypeScript, React,
        Redux Toolkit, and Next.js. I can create interfaces using shadcn/ui and
        TailwindCSS, and I've also developed backend logic using Node.js and
        Express, with MongoDB or PostgresQL for data management. I have
        experience working on team projects using Agile and Scrum methodologies.
        I am a quick learner and always take responsibility for my tasks,
        believing that consistent discipline and unwavering effort yield the
        most effective results.
      </p>

      <span className="italic">
        &quot;You can never understand everything. But you should push yourself
        to understand the system.&quot;
      </span>

      <SignatureSVG />
      <ScrollSVG />
    </div>
  );
};

export default Biography;
