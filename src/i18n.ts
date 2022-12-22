import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import commonEN from "./locales/en.json";
import commonES from "./locales/es.json";

const resources = {
  english: { common: commonEN },
  español: { common: commonES },
};

const options = {
  lookupQuerystring: "lng",
  lookupCookie: "language",
  lookupLocalStorage: "language",
  caches: ["localStorage", "cookie"],
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    ns: ["common"],
    defaultNS: "common",
    fallbackLng: "español",
    supportedLngs: ["english", "español"],
    interpolation: {
      escapeValue: false,
    },
    initImmediate: false,
  });

export default i18n;
