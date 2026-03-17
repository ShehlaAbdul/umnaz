import React from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";
import { Link, useLocation } from "react-router-dom";
import HomeAboutImg from "../../assets/images/home-about-img.webp";
import { motion } from "framer-motion";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { addLanguageToPath, getCurrentLanguage } from "../../utils/languageUtils";

function HomeAbout() {
   const { t, i18n } = useTranslation();
   const { pathname } = useLocation();
   // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
   const currentLanguage = getCurrentLanguage(pathname);
   const createLanguageAwarePath = (path) => {
     return addLanguageToPath(path, currentLanguage);
   };

  return (
    <section id="home-about">
      <div className="home-about container-fluid g-0 ">
        <div className="row d-flex flex-column flex-lg-row   align-items-center g-0">
          <motion.div
            className="text-side d-flex  flex-column align-items-start col-12 col-lg-7 g-0 "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="head-title"> {t("home.about.title")}</span>
            <h1
              className="pt-3"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {t("home.about.subtitle")}
            </h1>
            <div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>{t("home.about.text")}</p>
              <p>{t("home.about.text2")}</p>
            </div>
            <div className="pt-3 pt-md-4">
              <Link to={createLanguageAwarePath("/haqqimizda")}>
                <MainBtn title={`${t("home.about.title")}`} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="img-side col-12 col-lg-5 "
          >
            <img src={HomeAboutImg} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
