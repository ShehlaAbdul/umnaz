import React from 'react';
import "./Style.scss";
import HomeEstetic from "../../assets/images/HomeEstetics.webp";
import Banner1 from "../../assets/images/banner1.webp";
import Banner2 from "../../assets/images/banner2.webp";

function HomeEstetics() {
  return (
    <section id="home-estetics" className="container-fluid m-0 g-0">
      <div className="row m-0 p-0 g-0 ">
        <div className="left-side col-4 d-none d-md-block">
          <img src={HomeEstetic} alt="" />
        </div>

        <div className="home-estetics col-12 col-md-8 d-flex flex-column justify-content-center">
          <div className="top d-flex gap-2 gap-md-3 align-items-lg-center justify-content-center">
            <h2>Estetika ilə formalaşan</h2>
            <div className="banner1">
              <img src={Banner1} alt="" />
            </div>
          </div>
          <div className="bottom d-flex flex-column-reverse flex-lg-row gap-2 gap-md-3 align-items-lg-center justify-content-center">
            <div className='banner2'>
              <img src={Banner2} alt="" />
            </div>
            <h2>funksionallıqla tamamlanan məkanlar</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeEstetics;
