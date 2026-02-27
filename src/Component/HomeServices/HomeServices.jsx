import React from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";
import { motion } from "framer-motion";
function HomeServices() {
  const details = [
    {
      id: 1,
      title: "Ümumi xidmət bloku",
      description:
        "Hər şey bir ünvanda. Eskiz layihələndirmə,Geoloji həllər və konstruksiya hesablamaları,İnteryer və eksteryer dizayn xidmətləri.",
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
        <div className="content container-fluid">
          <div className="services-cards">
            {details.map((item) => (
              <motion.div
                className="service-card"
                key={item.id}
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="service-card__inner">
                  <span className="card-id">/{item.id}</span>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <MainBtn title={"Daha Ətraflı "} />
      </div>
    </section>
  );
}

export default HomeServices;
