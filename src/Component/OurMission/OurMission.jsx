import React, { useState } from 'react';
import "./Style.scss";
import BgImage from "../../assets/images/OurMission.webp"

function OurMission() {
    const values = [
    {
      title: "Peşəkarlıq və məsuliyyət",
    },
    {
      title: "Fərdi yanaşma",
    },
    {
      title: "Yaradıcılıq və innovasiya",
    },
    {
      title: "Keyfiyyət və davamlılıq",
    }
  ];

  return (
    <section id="values-section">
      <div
        className="values-section d-flex justify-content-between  "
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* SOL */}
        <div className="left">
          <h1>Dəyərlərimiz</h1>

          {values.map((item, index) => (
            <button
              key={index}
              className="value-btn"
              onClick={() => setActive(index)}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* SAĞ */}
        <div className="right ">
          <div className='content'>
            <h1>Missiyamız</h1>
            <p>
              Müasir, funksional və estetik baxımdan dəyər yaradan memarlıq
              həlləri ilə müştərilərimizin gözləntilərini üstələmək.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
