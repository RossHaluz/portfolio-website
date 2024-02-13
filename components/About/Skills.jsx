import ScrollSVG from "./ScrollSVG";
import SkillsList from "./SkillsList";

const Skills = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      <h2 className="font-bold text-2xl">SKILLS</h2>
      <SkillsList />
      <ScrollSVG />
    </div>
  );
};

export default Skills;
