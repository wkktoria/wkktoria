import {
  faCss3Alt,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mx-3">
      <h2>{t("technologiesAndSkills")}</h2>
      <div className="d-flex flex-column flex-xl-row justify-content-center align-items-center gap-3 my-4">
        <FontAwesomeIcon
          id="javaIcon"
          className="skill"
          icon={faJava}
          size="4x"
        />
        <FontAwesomeIcon id="jsIcon" className="skill" icon={faJs} size="4x" />
        <FontAwesomeIcon
          id="htmlIcon"
          className="skill"
          icon={faHtml5}
          size="4x"
        />
        <FontAwesomeIcon
          id="cssIcon"
          className="skill"
          icon={faCss3Alt}
          size="4x"
        />
        <FontAwesomeIcon
          id="dockerIcon"
          className="skill"
          icon={faDocker}
          size="4x"
        />
        <FontAwesomeIcon
          id="gitIcon"
          className="skill"
          icon={faGit}
          size="4x"
        />
        <FontAwesomeIcon
          id="githubIcon"
          className="skill"
          icon={faGithub}
          size="4x"
        />
        <FontAwesomeIcon
          id="databaseIcon"
          className="skill"
          icon={faDatabase}
          size="4x"
        />
        <FontAwesomeIcon
          id="linuxIcon"
          className="skill"
          icon={faLinux}
          size="4x"
        />
      </div>
    </section>
  );
}

export default Skills;
