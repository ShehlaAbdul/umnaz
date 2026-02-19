import React from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";

function HomeServices() {
  const details = [
    {
      id: 1,
      title: "Ümumi xidmət bloku",
      description:
        "Hər şey bir ünvanda. Eskiz layihələndirmə, Geoloji həllər və konstruksiya hesablamaları, İnteryer və eksteryer dizayn xidmətləri.",
    },
    {
      id: 2,
      title: "Restoranlar üçün",
      description:
        "Restoranlar üçün interyer və eksteryer dizayn xidməti. Fəaliyyətinizə uyğun, estetik və funksional məkan həlləri təqdim edirik.",
    },
    {
      id: 3,
      title: "Tikintiyə icazə üçün layihələr",
      description:
        "Tikintiyə icazənin alınması üçün Həyət və bağ evlərinin layihələrinin hazırlanması.",
    },
    {
      id: 4,
      title: "Mağazalar üçün",
      description:
        "Mağazalar üçün interyer və eksteryer dizayn xidməti. Brendinizə uyğun müasir və cəlbedici dizayn konseptləri.",
    },
  ];

  return (
    <section id="home-services">
      <div className="home-services container-fluid g-0 m-0 p-0">
        {/* HEAD */}
        <div className="head-side">
          <p>Xidmətlərimiz</p>
          <h1>Xidmətlər</h1>
        </div>

        {/* CONTENT */}
        <div className="content container">
            <div className="cards row g-4" >
          {details.map((item) => (
              <div className="card col-md-6 col-lg-2" key={item.id}>
                <div className="card-id">/{item.id}</div>
                <div className="card-content">
                  <h5>{item.title}</h5>
              <p>{item.description}</p>
              
                </div>
              </div>
          ))}
          </div>
        </div>

        {/* BUTTON */}
        <MainBtn />
      </div>
    </section>
  );
}

export default HomeServices;
