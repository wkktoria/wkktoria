import { useTranslation } from "react-i18next";

function Project({ name, description, imageUrl, stack, repoUrl }) {
  const { t } = useTranslation();

  return (
    <div className="card shadow h-100">
      <img src={imageUrl} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <ul className="list-inline">
          {stack.map((item) => (
            <li
              key={item}
              className="list-inline-item mx-1 my-1 shadow-sm stack-item "
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn border shadow-sm"
        >
          {t("sourceCode")}
        </a>
      </div>
    </div>
  );
}

export default Project;
