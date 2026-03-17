import React, { useEffect, useState } from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { apiRequest } from "../../../utils/api";
import parse from "html-react-parser";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import {
  addLanguageToPath,
  getCurrentLanguage,
} from "../../utils/languageUtils";
function HomeServices() {
  const [services, setServices] = useState([]);
  const { t, i18n } = useTranslation();
    const lang = i18n.language.slice(0, 2);
       const { pathname } = useLocation();
       // Get current language from URL BAXXXXXXXXXXXXXXXX BUNA
       const currentLanguage = getCurrentLanguage(pathname);
       const createLanguageAwarePath = (path) => {
         return addLanguageToPath(path, currentLanguage);
       };
  useEffect(() => {
    apiRequest("/services").then((data) => {
      if (data && data.data) {
        setServices(data.data);
      }
    });
  }, []);

  // const details = [
  //   {
  //     id: 1,
  //     title: "Ümumi xidmət bloku",
  //     description:
  //       "Hər şey bir ünvanda. Eskiz layihələndirmə,Geoloji həllər və konstruksiya hesablamaları,İnteryer və eksteryer dizayn xidmətləri.",
  //   },
  //   {
  //     id: 2,
  //     title: "Restoranlar üçün",
  //     description:
  //       "Restoranlar üçün interyer və eksteryer dizayn xidməti. Fəaliyyətinizə uyğun, estetik və funksional məkan həlləri təqdim edirik.",
  //   },
  //   {
  //     id: 3,
  //     title: "Tikintiyə icazə üçün layihələr",
  //     description:
  //       "Tikintiyə icazənin alınması üçün Həyət və bağ evlərinin layihələrinin hazırlanması.",
  //   },
  //   {
  //     id: 4,
  //     title: "Mağazalar üçün",
  //     description:
  //       "Mağazalar üçün interyer və eksteryer dizayn xidməti. Brendinizə uyğun müasir və cəlbedici dizayn konseptləri.",
  //   },
  // ];

  return (
    <section id="home-services">
      <div className="home-services container-fluid g-0 m-0 p-0">
        {/* HEAD */}
        <div className="head-side">
          <p> {t("home.services.title")}</p>
          <h1>{t("home.services.subtitle")}</h1>
        </div>

        {/* CONTENT */}
        <div className="content container-fluid">
          <div className="services-cards">
            {services.slice(0, 4).map((item, index) => (
              <>
                <motion.div
                  className="service-card"
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  key={item._id}
                  // viewport={{ once: true }}
                >
                  <div className="service-card__inner">
                    <span className="card-id">/{index + 1}</span>
                    <h3 className="card-title">
                      {parse(item.title?.[lang] || "")}
                    </h3>
                    <p className="card-text">
                      {" "}
                      {parse(item.text?.[lang] || "")}
                    </p>
                  </div>
                </motion.div>
              </>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div>
          <Link to={createLanguageAwarePath("/xidmetler")} className="">
            <MainBtn title={`${t("home.services.btn")}`} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeServices;
