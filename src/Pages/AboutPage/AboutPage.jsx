import React from 'react';
import "./Style.scss";
import HeroSection from '../../Component/HeroSection/HeroSection';
import BgImg from "../../assets/images/HeroSection.webp";
import HomeAbout from '../../Component/HomeAbout/HomeAbout';
import WhyUsSection from '../../Component/WhyUsSection/WhyUsSection';
import HomeEstetics from '../../Component/HomeEstetics/HomeEstetics';
import OurMission from '../../Component/OurMission/OurMission';
import { useTranslation } from "react-i18next";
import {
  addLanguageToPath,
  getCurrentLanguage,
} from "../../utils/languageUtils";
import { useLocation } from 'react-router-dom';
function AboutPage() {
     const { t, i18n } = useTranslation();
             const { pathname } = useLocation();
             // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
    const currentLanguage = getCurrentLanguage(pathname);
    const lang = i18n.language.slice(0, 2);
             const createLanguageAwarePath = (path) => {
               return addLanguageToPath(path, currentLanguage);
    };
  return (
    <>
      <HeroSection title={t("header.about")} bgImage={BgImg} />
      <HomeAbout />
      <WhyUsSection />
      <HomeEstetics />
      <OurMission />
    </>
  );
}

export default AboutPage;
