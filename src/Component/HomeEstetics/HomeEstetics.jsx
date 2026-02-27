import React from 'react';
import "./Style.scss";
import HomeEstetic from "../../assets/images/HomeEstetics.webp";
import Banner1 from "../../assets/images/banner1.webp";
import Banner2 from "../../assets/images/banner2.webp";
import { motion } from "framer-motion";

function HomeEstetics() {
  return (
    <section id="home-estetics" className="container-fluid m-0 g-0">
      <div className="row m-0 p-0 g-0 ">
        <div className="left-side col-4 d-none d-md-block">
          <img src={HomeEstetic} alt="" />
        </div>

        <div className="home-estetics col-12 col-md-8 d-flex flex-column justify-content-center">
          <div className="top d-flex gap-2 gap-md-3 align-items-lg-center justify-content-center">
            <motion.h2
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              viewport={{ once: false }}
            >
              Estetika ilə formalaşan
            </motion.h2>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="banner1"
            >
              <img src={Banner1} alt="" />
            </motion.div>
          </div>
          <div className="bottom d-flex flex-column-reverse flex-lg-row gap-2 gap-md-3 align-items-lg-center justify-content-center">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="banner2"
            >
              <img src={Banner2} alt="" />
            </motion.div>
            <motion.h2
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.3,
              }}
              viewport={{ once: false }}
            >
              funksionallıqla tamamlanan məkanlar
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeEstetics;
