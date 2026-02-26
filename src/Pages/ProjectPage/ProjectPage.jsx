import React from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImage from "../../assets/images/HeroSection.webp";
import Img from "../../assets/images/WhyUs.webp";
import Arrow from "../../assets/icons/arrowRight.svg";
import { FaArrowRightLong } from "react-icons/fa6";

function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "Modern Villa",
      image: Img,
    },
    {
      id: 2,
      title: "Restaurant Interior",
      image: Img,
    },
    {
      id: 3,
      title: "Luxury Store",
      image: Img,
    },
    {
      id: 4,
      title: "Garden House",
      image: Img,
    },
  ];

  return (
    <>
      <HeroSection title={"Layihələr"} bgImage={BgImage} />
      <section id="projects-page">
        <div className="projects-page container-fluid">
          <div className="projects-grid">
            {projects.map((item) => (
              <div
                key={item.id}
                className="project-card"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="overlay">
                  <h3>{item.title}</h3>

                  <div className="arrow">
                    <FaArrowRightLong className="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectPage;
