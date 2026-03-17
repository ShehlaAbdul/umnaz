import React from 'react';
import "./Style.scss";
import { motion } from "framer-motion";
import { addLanguageToPath, getCurrentLanguage } from '../../utils/languageUtils';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function WhyUsSection() {
      const { t, i18n } = useTranslation();
               const { pathname } = useLocation();
               // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
      const currentLanguage = getCurrentLanguage(pathname);
      const lang = i18n.language.slice(0, 2);
               const createLanguageAwarePath = (path) => {
                 return addLanguageToPath(path, currentLanguage);
  };
  
  return (
    <section id="why-us">
      <div className="why-us container-fluid">
        <div className="content">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("about.whyTitle")}
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("about.whyText")}
          </motion.p>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("about.whyText2")}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default WhyUsSection;
