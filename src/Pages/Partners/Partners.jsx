import React from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import bgImage from "../../assets/images/HeroSection.webp";
import HomePartners from "../../Component/HomePartners/HomePartners";

function Partners() {
  return (
    <>
      <HeroSection title={"Tərəfdaşlar"} bgImage={bgImage} />
      <section id="partners-page">
        <div className="partners-page container-fluid g-0 d-flex justify-content-center ">
          <p className="top">
            Peşəkar iş ortaqlarımız və strateji partnyorumuzla birlikdə müasir
            memarlıq yanaşmalarına əsaslanan layihələr həyata keçiririk.
          </p>
          <div className="overlay"></div>
        </div>
        <div className="our-partners">
                  <p className="partners-title ">İş ortaqlarımız</p>
                  <HomePartners/>
        </div>
      </section>
    </>
  );
}

export default Partners;
