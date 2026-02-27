import React from "react";
import "./Style.scss";
// import HomeHero from "../../assets/images/home-hero.webp";
import MainBtn from "../MainBtn/MainBtn";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function HomeHero() {
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
            UMNAZ Memarlıq və Dizayn Agentliyi — memarlıqda funksionallıq,
            dizaynda estetik baxış.
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
            UmNaz Memarlıq MMC müasir memarlıq trendlərini fərdi yanaşma ilə
            birləşdirərək, yaşayış və kommersiya məkanları üçün funksional,
            estetik və davamlı həllər yaradır.
          </motion.p>
          <Link to={"/layiheler"}>
            {" "}
            <MainBtn title={"Layihələrə bax"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
