import { useTranslation } from "react-i18next";
import projects from "../data/projects";
import Project from "./Project";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mx-3">
      <h2>{t("projects")}</h2>
      <p className="text-center text-muted">{t("projectsDescription")}</p>
      <div className="container mt-4">
        <div className="row gy-4">
          {projects.map((project) => (
            <div className="col-lg-4" key={project.name}>
              <Project
                name={project.name}
                description={project.description}
                imageUrl={project.imageUrl}
                stack={project.stack}
                repoUrl={project.repoUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
