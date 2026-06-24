import { useTranslation } from "react-i18next";
// import * as Yup from "yup";
// import { useState, useEffect } from "react";

export default function useCadastraVideo() {
  const { t } = useTranslation(["video"]);
  // const [isSubmittingForm, setSubmittingForm] = useState<boolean>(false);

  // useEffect(() => {
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return {
    t,
    // isSubmittingForm
  };
}
