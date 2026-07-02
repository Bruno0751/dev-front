import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import axios from "axios";

export default function useListarVideos() {
  const { t } = useTranslation(["video"]);
  const [list, setList] = useState<any>();

  useEffect(() => {
    findAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const findAll = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/v1/produto"
      );
      console.log(response.data);
      setList(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    t,
    list,
  };
}
