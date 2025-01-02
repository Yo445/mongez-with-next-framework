import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: [
        "localStorage",
        "cookie",
        "querystring",
        "htmlTag",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
    react: {
      useSuspense: false, // Disable suspense for server-side rendering
    },
    supportedLngs: ["en", "ar", "ur"],
  });

export default i18n;
