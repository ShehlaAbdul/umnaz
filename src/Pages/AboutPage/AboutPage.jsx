import React from 'react';
import "./Style.scss";
import HeroSection from '../../Component/HeroSection/HeroSection';
import BgImg from "../../assets/images/HeroSection.webp";
import HomeAbout from '../../Component/HomeAbout/HomeAbout';
import WhyUsSection from '../../Component/WhyUsSection/WhyUsSection';
import HomeEstetics from '../../Component/HomeEstetics/HomeEstetics';

function AboutPage() {
  return (
    <>
      <HeroSection title={"Haqqımızda"} bgImage={BgImg} />
      <HomeAbout />
      <WhyUsSection />
      <HomeEstetics/>
    </>
  );
}

export default AboutPage;
