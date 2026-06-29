import { useTranslation } from "react-i18next";

export default function useGFooter() {
  const { t } = useTranslation(["footer"]);
  return {
    t,
  };
}