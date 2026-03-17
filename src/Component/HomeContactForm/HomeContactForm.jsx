import React from 'react';
import "./Style.scss";
import MainBtn from '../MainBtn/MainBtn';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { addLanguageToPath, getCurrentLanguage } from '../../utils/languageUtils';
import { t } from "i18next";


function HomeContactForm() {

   const { t, i18n } = useTranslation();
         const { pathname } = useLocation();
         // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
         const currentLanguage = getCurrentLanguage(pathname);
         const createLanguageAwarePath = (path) => {
           return addLanguageToPath(path, currentLanguage);
  };
  
  return (
    <section className="contact-section">
      <motion.div
        className="container"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title */}
        <div className="contact-header">
          <p>{t("home.contact.title")}</p>
          <h2>{t("home.contact.subtitle")}</h2>
        </div>

        {/* Form */}
        <form className="contact-form">
          <div className="row">
            {/* Ad Soyad */}
            <div className="col-12 col-md-6">
              <label>{t("home.contact.form.fullName.label")}</label>
              <input
                type="text"
                placeholder={t("home.contact.form.fullName.placeholder")}
              />
            </div>

            {/* Email */}
            <div className="col-12 col-md-6">
              <label>{t("home.contact.form.email.label")}</label>
              <input
                type="email"
                placeholder={t("home.contact.form.email.placeholder")}
              />
            </div>

            {/* Başlıq */}
            <div className="col-12">
              <label>{t("home.contact.form.subject.label")}</label>
              <input
                type="text"
                placeholder={t("home.contact.form.subject.placeholder")}
              />
            </div>

            {/* Mesaj */}
            <div className="col-12">
              <label>{t("home.contact.form.message.label")}</label>
              <textarea
                rows="5"
                placeholder={t("home.contact.form.message.placeholder")}
              ></textarea>
            </div>

            {/* Button */}
            <div className="col-12">
              <MainBtn title={t("home.contact.form.btn")} />
            </div>
          </div>
        </form>
      </motion.div>
    </section>
  );
}

export default HomeContactForm;
