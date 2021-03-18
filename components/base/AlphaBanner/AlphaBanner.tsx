import React from "react";
//import { useTranslation } from 'react-i18next';
import style from "./AlphaBanner.module.scss";

const AlphaBanner: React.FC = () => {
  //const { i18n, t } = useTranslation();

  /*
  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };*/
  return (
    <div className={style.Banner}>
      <p className={style.Text}>
        Welcome to the <span className={style.Alpha}> Alpha Version</span> of
        secret NFT. All the marketplace is in chaos net. Only FAKE CAPS are
        used.
      </p>
      <a href="#" className={style.More}>
        More infos
      </a>
    </div>
  );
};

export default AlphaBanner;