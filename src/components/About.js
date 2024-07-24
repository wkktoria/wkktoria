import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="mx-3">
      <h2>{t("greeting")}</h2>
      <p className="text-muted">Aspiring Java Developer</p>
      <p>{t("selfDescription")}</p>
    </section>
  );
}

export default About;
