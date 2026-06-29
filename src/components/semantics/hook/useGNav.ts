import { useTranslation } from "react-i18next";

export default function useGNav() {
  const { t } = useTranslation(["navbar"]);
  return {
    t,
  };
}