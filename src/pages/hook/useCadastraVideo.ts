import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

export default function useCadastraVideo() {
  const { t } = useTranslation(["video"]);
  const [isSubmittingForm, setSubmittingForm] =
    useState<boolean>(false);

  const formik = useFormik({
    initialValues: {} as any,
    // validationSchema: formSchema,
    validate: (values: any) => {},
    onSubmit: async (values: any) => {},
  });
  const formSchema = Yup.object().shape({});
  return {
    t,
    formik,
    isSubmittingForm,
  };
}
