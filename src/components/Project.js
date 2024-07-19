function Project({ name, imageUrl, stack, repoUrl }) {
  return (
    <div className="project d-flex flex-column justify-content-start align-items-center gap-2 m-3 border text-center">
      <img
        src={imageUrl}
        alt={name}
        className="project-image border-bottom mb-2"
      />
      <h3>{name}</h3>
      <ul className="list-inline">
        {stack.map((item) => (
          <li className="list-inline-item mx-1 my-1">{item}</li>
        ))}
      </ul>
      <a
        className="btn btn-sm"
        href={repoUrl}
        target="_blank"
        rel="noreferrer noopener"
        role="button"
      >
        Source code
      </a>
    </div>
  );
}

export default Project;
