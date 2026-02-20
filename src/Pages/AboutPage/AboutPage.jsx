import React from 'react';
import "./Style.scss";
import HeroSection from '../../Component/HeroSection/HeroSection';
import BgImg from "../../assets/images/HeroSection.webp";

function AboutPage() {
  return (
    <>
          <HeroSection title={"Haqqımızda"} bgImage={BgImg} />
    </>
  );
}

export default AboutPage;
