import React from 'react';
import "./Style.scss";
import HomeContactForm from '../../Component/HomeContactForm/HomeContactForm';
import HomeEstetics from '../../Component/HomeEstetics/HomeEstetics';
import HomeServices from '../../Component/HomeServices/HomeServices';

function Home() {
  return (
    <>
      <HomeServices/>
      <HomeEstetics/>
      <HomeContactForm/>
    </>
  );
}

export default Home;
