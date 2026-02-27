import React from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "react-router-dom";
import HomeAboutImg from "../../assets/images/home-about-img.webp";
import { motion } from "framer-motion";

function HomeAbout() {
  return (
    <section id="home-about">
      <div className="home-about container-fluid g-0 ">
        <div className="row d-flex flex-column flex-lg-row   align-items-center g-0">
          <div className="text-side d-flex  flex-column align-items-start col-12 col-lg-7 g-0 ">
            <motion.span
              className="head-title"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              viewport={{ once: false }}
            >
              Haqqımızda
            </motion.span>
            <motion.h1
              className="pt-3"
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Müasir Memarlığın Ünvanı
            </motion.h1>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p>
                UMNAZ Memarlıq və Dizayn Agentliyi 2023-cü ildən etibarən
                memarlıq və dizayn sahəsində fəaliyyət göstərən, müasir
                yanaşmaları və funksional həlləri ilə seçilən bir şirkətdir.
                Şirkət yaşayış, kommersiya və ictimai məkanlar üçün memarlıq
                layihələndirmə, dizayn və konsultasiya xidmətləri təqdim edir.
              </p>
              <p>
                UmNaz Memarlıq MMC hər bir layihəyə fərdi yanaşaraq, estetik
                dəyərlərlə funksionallığı birləşdirən məkanlar yaradır.
                Layihələrimiz müasir memarlıq trendlərinə uyğun, müştəri
                ehtiyacları əsasında və yüksək keyfiyyət standartlarına uyğun
                şəkildə hazırlanır.
              </p>
            </motion.div>
            <div className="pt-2 pt-md-4">
              <Link to={"/haqqimizda"}>
                <MainBtn title={"Haqqımızda"} />
              </Link>
            </div>
          </div>
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
