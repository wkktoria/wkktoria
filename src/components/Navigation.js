import ThemeSwitch from "./ThemeSwitch";

function Navigation() {
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
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
