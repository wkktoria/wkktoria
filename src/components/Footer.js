function Footer() {
  return (
    <footer
      id="footer"
      className="d-flex flex-wrap justify-content-between align-items-center p-3 border-top mt-auto"
    >
      <div className="col-md-4 d-flex align-items-center">
        <span className="footer-text">
          &copy; {new Date().getFullYear()} wkktoria
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="footer-text" href="https://github.com/wkktoria">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li className="ms-3">
          <a
            className="footer-text"
            href="https://www.linkedin.com/in/wiktoria-peretiatkowicz"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
