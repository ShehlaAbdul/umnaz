import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImage from "../../assets/images/HeroSection.webp";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { apiRequest } from "../../../utils/api";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import MainBtn from "../../Component/MainBtn/MainBtn";
import {
  addLanguageToPath,
  getCurrentLanguage,
} from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import parse from "html-react-parser";

function NewsDetail() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const currentLanguage = getCurrentLanguage(pathname);
  const createLanguageAwarePath = (path) => {
    return addLanguageToPath(path, currentLanguage);
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState(null);
  const [otherNews, setOtherNews] = useState([]);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    // single news
    apiRequest(`/news/${id}`).then((data) => {
      if (data && data.data) {
        setNews(data.data);
      }
    });
    apiRequest("/news").then((data) => {
      if (data && data.data) {
        const filtered = data.data
          .filter((item) => item._id !== id) // cari layihəni çıxar
   
        setOtherNews(filtered);
      }
    });
  }, [id]);

  if (!news) return <p>Loading...</p>;

  return (
    <>
      <HeroSection
        title={
          news?.[`title_${currentLanguage}`] || news?.title_az || "Loading..."
        }
        bgImage={BgImage}
      />

      <section id="news-detail">
        <div className="news-detail container-fluid g-0 ">
          {/* Thumbnail */}
          <div className="thumbnail">
            <div
              className="thumbnail-bg"
              style={{
                backgroundImage: `url(https://api.umnazmemarliq.az${news.thumbnail})`,
              }}
            ></div>

            <img
              src={`https://api.umnazmemarliq.az${news.thumbnail}`}
              alt={news.title?.az}
            />
          </div>

          {/* Content */}
          <div className="news-content">
            <h3>{news?.[`title_${currentLanguage}`] || news?.title_az}</h3>

            <div
              className="news-text"
              dangerouslySetInnerHTML={{
                __html: news?.[`text_${currentLanguage}`] || project?.text_az,
              }}
            />
          </div>
          {/* Other News */}
        </div>
      </section>
          <section id="other-news-page">
            <div className="news-page container-fluid">
              <div className="news-grid row">
                {otherNews.map((item) => (
                  <div
                    key={item.id}
                    className="news-card col-12 col-sm-6 col-md-4 col-lg-3 "
                    onClick={() => navigate(`/xeberler/${item.id}`)}
                  >
                    <div className="card-container">
                      <div className="card-bg">
                        <img src={`https://api.umnazmemarliq.az${item.thumbnail}`} alt="" />
                      </div>
                      <div className="text-side">
                        <h5>
                          {" "}
                          {item?.title?.[currentLanguage] || item?.title?.az}
                        </h5>
                        <span className="date">
                          {new Date(item.createdAt).toLocaleDateString("az-AZ")}
                        </span>
                        <p className="desc">
                          {parse(
                            item?.text?.[currentLanguage] ||
                              item?.text?.az ||
                              "",
                          )}
                        </p>
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

export default NewsDetail;
