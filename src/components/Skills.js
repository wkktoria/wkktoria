import {
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mx-4">
      <h2>{t("technologiesAndSkills")}</h2>
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 my-4">
        <FontAwesomeIcon id="javaIcon" icon={faJava} size="4x" />
        <FontAwesomeIcon id="jsIcon" icon={faJs} size="4x" />
        <FontAwesomeIcon id="htmlIcon" icon={faHtml5} size="4x" />
        <FontAwesomeIcon id="cssIcon" icon={faCss3Alt} size="4x" />
        <FontAwesomeIcon id="dockerIcon" icon={faDocker} size="4x" />
        <FontAwesomeIcon id="gitIcon" icon={faGit} size="4x" />
        <FontAwesomeIcon id="githubIcon" icon={faGithub} size="4x" />
      </div>
    </section>
  );
}

export default Skills;
