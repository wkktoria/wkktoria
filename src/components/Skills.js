import { useTranslation } from "react-i18next";
import Skill from "./Skill";
import skills from "../data/skills";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mx-3">
      <h2>{t("technologiesAndSkills")}</h2>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-3 my-4">
        {skills.map((skill) => (
          <Skill label={skill.label} icon={skill.icon} iconId={skill.iconId} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
