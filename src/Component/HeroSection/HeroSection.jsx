import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Style.scss";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  addLanguageToPath,
  getCurrentLanguage,
} from "../../utils/languageUtils";

function HeroSection({ title, bgImage }) {
    const { t, i18n } = useTranslation();
             const { pathname } = useLocation();
             // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
    const currentLanguage = getCurrentLanguage(pathname);
    const lang = i18n.language.slice(0, 2);
             const createLanguageAwarePath = (path) => {
               return addLanguageToPath(path, currentLanguage);
    };
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <motion.div
        className="hero-overlay"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{ once: false }}
      >
        <h2>{title}</h2>

        <div className="breadcrumb">
          <Link to="/">{t("header.home")}</Link>
          <span> &gt; </span>
          <span className="active">{title}</span>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
