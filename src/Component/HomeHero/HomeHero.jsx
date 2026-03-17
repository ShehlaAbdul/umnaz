import React from "react";
import "./Style.scss";
// import HomeHero from "../../assets/images/home-hero.webp";
import MainBtn from "../MainBtn/MainBtn";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getCurrentLanguage,
  addLanguageToPath,
  removeLanguageFromPath,
} from "../../utils/languageUtils";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function HomeHero() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };

  return (
    <section id="home-hero" className="g-0 p-0">
      <div className="home-hero">
        <div
        // className="hero-head g-0"
        // data-aos="fade-right"
        // data-aos-anchor="#example-anchor"
        // data-aos-offset="500"
        // data-aos-duration="1000"
        >
          <motion.h1
            //  className="hero-text m-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: false }}
          >
            {t("home.hero.title")}
          </motion.h1>
        </div>
        <div className="bottom d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 ">
          <motion.p
            className="hero-text m-0"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: false }}
          >
            {t("home.hero.description")}
          </motion.p>
          <Link to={"/layiheler"}>
            {" "}
            <MainBtn title={` ${t("home.hero.btn")}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
