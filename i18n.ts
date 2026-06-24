import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  br: {
    video: {
      labelNome: "Nome: ",
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "br",
  fallbackLng: "br",
  interpolation: {
    escapeValue: false,
  },
});
