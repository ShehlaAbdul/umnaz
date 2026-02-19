import React from 'react';
import "./Style.scss";
// import HomeHero from "../../assets/images/home-hero.webp";
import MainBtn from '../MainBtn/MainBtn';
import { Link } from 'react-router-dom';


function HomeHero() {
  return (
    <section id="home-hero" className="g-0 p-0">
      <div className="home-hero">
        <div className="hero-head g-0">
          <h1>
            UMNAZ Memarlıq və Dizayn Agentliyi — memarlıqda funksionallıq,
            dizaynda estetik baxış.
          </h1>
        </div>
        <div className="bottom d-flex flex-column flex-md-row align-items-start align-items-md-end justify-content-between gap-3 ">
          <p className='hero-text m-0'>
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
