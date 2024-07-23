import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <h2>{t("contact")}</h2>
      <p className="text-center text-muted">{t("contactDescription")}</p>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <a
          type="button"
          className="btn border px-3"
          href="mailto:wiktoria.peretiatkowicz.contact@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <i className="bi bi-envelope contact-icon"></i>
            <span>E-mail</span>
          </div>
        </a>
        <a
          type="button"
          className="btn border px-3"
          href="https://github.com/wkktoria"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <i className="bi bi-github contact-icon"></i>
            <span>GitHub</span>
          </div>
        </a>
        <a
          type="button"
          className="btn border px-3"
          href="https://www.linkedin.com/in/wiktoria-peretiatkowicz"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="d-flex flex-row justify-content-center align-items-center gap-2">
            <i id="linkedInIcon" className="bi bi-linkedin contact-icon"></i>
            <span>LinkedIn</span>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Contact;
