import React from "react";
import { skills } from "./data/skills";
import SkillsSlider from "./SkillsSlider";

const Skills = () => {
  return (
    <section className="bg-tertiary py-3">
      <div className="container mx-auto ">
        <SkillsSlider />
      </div>
    </section>
  );
};

export default Skills;
