import React from 'react';
import "./Style.scss";
import HeroSection from '../../Component/HeroSection/HeroSection';
import BgImage from "../../assets/images/HeroSection.webp";

function ServicesPage() {
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
        {
          id: 5,
          title: "Çıxarış üçün eskizlər",
          description:
            "Çıxarışın alınması üçün zəruri olan eskiz layihələrin hazırlanması.",
        },
        {
          id: 6,
          title: "Layihələndirmə prosesi",
          description:
            "Peşəkar layihələndirmə ilə prosesləri bizə həvalə edin fərdi və qeyri-yaşayış obyektlərinin layihələndirilməsi.",
        },
        {
          id: 7,
          title: "Anbar binaları",
          description:
            "Anbar binaları üçün müasir və etibarlı layihə həlləri. İstismara uyğun, funksional və davamlı konstruksiyalar.",
        },
        {
          id: 8,
          title: "Tədris / kurs bölməsi",
          description:
            "interyer dizayn (Corona, AutoCAD, 3ds Max, Photoshop), memarlıq (Archicad, SketchUp, Lumion) və qrafik dizayn proqramları ",
        },
      ];
  return (
    <>
      <HeroSection title={"Xidmətlər"} bgImage={BgImage} />
      <section id="services-page">
        <div className="services-page container-fluid">
          <div className="services-grid">
            {details.map((item) => (
              <div className="service-card" key={item.id}>
                    <div className="service-card__inner">
                <span className="card-id">/{item.id}</span>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.description}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
