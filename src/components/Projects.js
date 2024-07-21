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
      <div className="container mt-4">
        <div className="row gy-4">
          {projects.map((project) => (
            <div className="col-lg-4">
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
