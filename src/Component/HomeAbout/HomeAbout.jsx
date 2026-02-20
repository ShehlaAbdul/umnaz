import React from 'react';
import "./Style.scss";
import MainBtn from '../MainBtn/MainBtn';
import { Link } from 'react-router-dom';
import HomeAboutImg from "../../assets/images/home-about-img.webp"


function HomeAbout() {
  return (
    <section id="home-about">
      <div className="home-about container-fluid g-0 ">
        <div className="row d-flex flex-column flex-lg-row   align-items-center g-0">
          <div className="text-side d-flex  flex-column align-items-start col-12 col-lg-7 g-0 ">
            <span className="head-title">Haqqımızda</span>
            <h1 className="pt-3">Müasir Memarlığın Ünvanı</h1>
            <p>
              UMNAZ Memarlıq və Dizayn Agentliyi 2023-cü ildən etibarən memarlıq
              və dizayn sahəsində fəaliyyət göstərən, müasir yanaşmaları və
              funksional həlləri ilə seçilən bir şirkətdir. Şirkət yaşayış,
              kommersiya və ictimai məkanlar üçün memarlıq layihələndirmə,
              dizayn və konsultasiya xidmətləri təqdim edir.
            </p>
            <p>
              UmNaz Memarlıq MMC hər bir layihəyə fərdi yanaşaraq, estetik
              dəyərlərlə funksionallığı birləşdirən məkanlar yaradır.
              Layihələrimiz müasir memarlıq trendlərinə uyğun, müştəri
              ehtiyacları əsasında və yüksək keyfiyyət standartlarına uyğun
              şəkildə hazırlanır.
            </p>
            <Link to={""} className="pt-2 pt-md-4">
              <MainBtn title={"Haqqımızda"} />
            </Link>
          </div>
          <div className="img-side col-12 col-lg-5 ">
            <img src={HomeAboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
