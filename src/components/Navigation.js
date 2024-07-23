import languages from "../constant/languages";
import ThemeSwitch from "./ThemeSwitch";
import { useTranslation } from "react-i18next";

function Navigation() {
  const { i18n, t } = useTranslation();

  const onLanguageChange = (e) => {
    const code = e.target.value;
    i18n.changeLanguage(code);
  };

  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href=".">
          wkktoria
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {t("about")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                {t("projects")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                {t("contact")}
              </a>
            </li>
            <li className="nav-item">
              <ThemeSwitch />
            </li>
            <select defaultValue={i18n.language} onChange={onLanguageChange}>
              {languages.map(({ label, code }) => (
                <option key={code} value={code}>
                  {label}
                </option>
              ))}
            </select>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
