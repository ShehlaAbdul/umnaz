import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImage from "../../assets/images/HeroSection.webp";
import { useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectDetail() {
    const { id } = useParams();
      const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    // single project
    apiRequest(`/projects/${id}`).then((data) => {
      if (data && data.data) {
        setProject(data.data);
      }
    });
    apiRequest("/projects").then((data) => {
      if (data && data.data) {
        const filtered = data.data.filter((item) => item.id !== id).slice(0, 2);
        setOtherProjects(filtered);
      }
    });
  }, [id]);

  if (!project) return <p>Loading...</p>;

  return (
    <>
      <HeroSection title={"Project name"} bgImage={BgImage} />

      <section id="project-detail">
        <div className="project-detail container-fluid g-0 ">
          {/* Thumbnail */}
          <div className="thumbnail">
            <img
              src={`https://api.umnazmemarliq.az${project.thumbnail}`}
              alt={project.title?.az}
            />
          </div>

          {/* Slider images */}
          <div className="images">
            {project.images?.map((img, index) => (
              <img
                key={index}
                src={`https://api.umnazmemarliq.az${img}`}
                alt=""
              />
            ))}
          </div>

          {/* Content */}
          <div className="projects-content">
            <h1>{project.title?.az}</h1>
            <p>{project.description?.az}</p>
          </div>

          {/* Other Projects */}
          <div className="other-projects">
            <h3>Digər layihələr</h3>
            <div className="other-grid">
                <div>
                  <Swiper spaceBetween={50} slidesPerView={1}>
              {otherProjects.map((item) => (
                    <SwiperSlide key={item._id}>
                      {" "}
                      <div
                        className="other-card"
                        onClick={() => navigate(`/layiheler/${item._id}`)}
                        style={{
                          backgroundImage: `url(https://api.umnazmemarliq.az${item.thumbnail})`,
                        }}
                      >
                        <div className="overlay">
                          <h4>{item.title?.az}</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
