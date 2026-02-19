import React from 'react';
import "./Style.scss";
import HomeContactForm from '../../Component/HomeContactForm/HomeContactForm';
import HomeEstetics from '../../Component/HomeEstetics/HomeEstetics';
import HomeServices from '../../Component/HomeServices/HomeServices';
import HomeProject from '../../Component/HomeProjects/HomeProjects';
import HomeAbout from '../../Component/HomeAbout/HomeAbout';

function Home() {
  return (
    <>
      <HomeAbout/>
      <HomeProject/>
      <HomeServices/>
      <HomeEstetics/>
      <HomeContactForm/>
    </>
  );
}

export default Home;
