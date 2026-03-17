import React, { useState } from 'react';
import "./Style.scss";
import BgImage from "../../assets/images/OurMission.webp";
// import {motion} from "../"
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { addLanguageToPath, getCurrentLanguage } from '../../utils/languageUtils';


function OurMission() {
      const { t, i18n } = useTranslation();
               const { pathname } = useLocation();
               // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
      const currentLanguage = getCurrentLanguage(pathname);
      const lang = i18n.language.slice(0, 2);
               const createLanguageAwarePath = (path) => {
                 return addLanguageToPath(path, currentLanguage);
  };
  
const values = t("about.valuesList", { returnObjects: true });
  return (
    <section id="values-section">
      <div
        className="values-section d-flex justify-content-between  "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* SOL */}
        <div className="left">
          <h1>Dəyərlərimiz</h1>

          {values.map((item, index) => (
            <button
              key={index}
              className="value-btn"
              onClick={() => setActive(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* SAĞ */}
        <div className="right ">
          <div className="content">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {t("about.missionTitle")}
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {t("about.missionText")}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
