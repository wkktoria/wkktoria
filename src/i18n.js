import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          about: "About me",
          projects: "Projects",
          skills: "Skills",
          technologiesAndSkills: "Technologies and Skills",
          contact: "Contact",
          greeting: "Hello, I'm wkktoria! 👋",
          sourceCode: "Source code",
          selfDescription:
            "I'm dedicated and passionate computer science student, seeking to gain more programming experience and face new challenges.",
          projectsDescription:
            "I'm into open-source, so all of my projects are available on GitHub.",
          contactDescription:
            "Feel free to send me e-mail or reach me on my socials.",
        },
      },
      pl: {
        translation: {
          about: "O mnie",
          projects: "Projekty",
          skills: "Umiejętności",
          technologiesAndSkills: "Technologie i Umiejętności",
          contact: "Kontakt",
          greeting: "Cześć, jestem wkktoria! 👋",
          sourceCode: "Kod źródłowy",
          selfDescription:
            "Jestem zaangażowaną i pełną pasji studentką informatyki, która chce zdobyć więcej doświadczenia w programowaniu i stawić czoła nowym wyzwaniom.",
          projectsDescription:
            "Jestem zwolenniczką open-source, dlatego wszystkie moje projekty są dostępne na GitHubie.",
          contactDescription:
            "Możesz wysłać mi e-mail lub skontaktować się ze mną na moich portalach społecznościowych.",
        },
      },
    },
  });

export default i18n;
