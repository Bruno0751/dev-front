import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  br: {
    buttons: {
    },
    navbar: {
      cadastrar: "Cadastrar",
    },
    footer: {
      rodaPe: " Bruno Gressler da Silveira. Todos os direitos reservados",
    },
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
