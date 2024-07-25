import { useTranslation } from "react-i18next";
import ContactItem from "./ContactItem";
import socials from "../data/socials";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mx-3">
      <h2>{t("contact")}</h2>
      <p className="text-center text-muted">{t("contactDescription")}</p>
      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center gap-3">
        {socials.map((social) => (
          <ContactItem
            href={social.href}
            iconId={social.iconId}
            iconClass={social.iconClass}
            label={social.label}
          />
        ))}
      </div>
    </section>
  );
}

export default Contact;
