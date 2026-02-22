import React from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import bgImage from "../../assets/images/HeroSection.webp";

function Partners() {
  return (
    <>
      <HeroSection title={"Tərəfdaşlar"} bgImage={bgImage} />
      <section id="partners-page">
        <div className="partners-page-top container-fluid g-0 d-flex justify-content-center ">
          <div className="overlay">1</div>
          <p>
            Peşəkar iş ortaqlarımız və strateji partnyorumuzla birlikdə müasir
            memarlıq yanaşmalarına əsaslanan layihələr həyata keçiririk.
          </p>
        </div>
      </section>
    </>
  );
}

export default Partners;
