import React from 'react';
import "./Style.scss";
// import HomeHero from "../../assets/images/home-hero.webp";
import MainBtn from '../MainBtn/MainBtn';
import { Link } from 'react-router-dom';
// import AOS from "aos";
// import "aos/dist/aos.css"; 
// AOS.init();


function HomeHero() {
  return (
    <section id="home-hero" className="g-0 p-0">
      <div className="home-hero">
        <div
          className="hero-head g-0"
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
        >
          <h1>
            UMNAZ Memarlıq və Dizayn Agentliyi — memarlıqda funksionallıq,
            dizaynda estetik baxış.
          </h1>
        </div>
        <div className="bottom d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 ">
          <p className="hero-text m-0">
            UmNaz Memarlıq MMC müasir memarlıq trendlərini fərdi yanaşma ilə
            birləşdirərək, yaşayış və kommersiya məkanları üçün funksional,
            estetik və davamlı həllər yaradır.
          </p>
          <Link to={"/"}>
            {" "}
            <MainBtn title={"Layihələrə bax"} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
