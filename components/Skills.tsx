import type { NextPage } from "next";
import { ISkills } from "../typings";
import { Skill } from "./Skill";

interface ISKillsProps {
  skills: ISkills[];
}


export const Skills: NextPage<ISKillsProps> = ({ skills }) => {
  const languages = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "languages");
  const frontend = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "frontend");
  const headlessCms = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "headless cms");
  const other = skills?.filter(skill => skill?.fieldType?.toLowerCase() === "other");
  const testing_tools = skills?.filter(
    skill =>
      skill?.fieldType?.toLowerCase() === "testing" || skill?.fieldType?.toLowerCase() === "tools"
  );
  const familiar = skills?.filter(skill => skill?.proficient === false);

  return (
    <>
      <h1 className="skills_heading">Skills</h1>
      <h2 className="skills_learning">Skills with a <strong>*</strong> are skills that I am familiar with.</h2>
      <div className="skills_box">
        <Skill skills={languages} skill="Languages" />
        <Skill skills={frontend} skill="Frontend" />
        <Skill skills={headlessCms} skill="Headless CMS" />
        <Skill skills={testing_tools} skill="Testing &amp; Tools" />
        <Skill skills={other} skill="Other" />
      </div>
    </>
  );
};
