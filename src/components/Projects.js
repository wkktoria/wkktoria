import projects from "../data/projects";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects">
      <h3 className="text-center">Projects</h3>
      <p className="text-center text-muted">
        All of my projects are available at{" "}
        <a
          href="https://github.com/wkktoria"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
        .
      </p>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        {projects.map((project) => (
          <Project
            name={project.name}
            imageUrl={project.imageUrl}
            stack={project.stack}
            repoUrl={project.repoUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
