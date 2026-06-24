import { useTranslation } from "react-i18next";

export default function useListarVideos() {
  const { t } = useTranslation(["video"]);

  return {
    t,
  };
}
