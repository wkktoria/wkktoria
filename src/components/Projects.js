import projects from "../data/projects";
import Project from "./Project";

function Projects() {
  return (
    <section id="projects" className="mx-2">
      <h2 className="text-center">Projects</h2>
      <p className="text-center text-muted">
        I'm into open-source, so all of my projects are available at{" "}
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
