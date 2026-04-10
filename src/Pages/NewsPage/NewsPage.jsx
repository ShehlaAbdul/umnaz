import React, { useEffect, useState } from "react";
import "./Style.scss";
import HeroSection from "../../Component/HeroSection/HeroSection";
import BgImg from "../../assets/images/HeroSection.webp";
import { useLocation, useNavigate } from "react-router-dom";
import BgImage from "../../assets/images/news.png";
import { getCurrentLanguage } from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import { apiRequest } from "../../../utils/api";
import { Helmet } from "react-helmet-async";
import parse from "html-react-parser";

function NewsPage() {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const currentLanguage = getCurrentLanguage(pathname);

  useEffect(() => {
    apiRequest("/news").then((data) => {
      if (data && data.data) {
        setNews(data.data);
      }
    });
  }, []);

    // const newsData = [
  //   {
  //     id: 1,
  //     title: "Xeber adi",
  //     date: "09/04/2026",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
  //   },
  //   {
  //     id: 2,
  //     title: "Xeber adi",
  //     date: "05/04/2026",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
  //   },
  //   {
  //     id: 3,
  //     title: "Xeber adi",
  //     date: "01/04/2026",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
  //   },
  //   {
  //     id: 4,
  //     title: "Xeber adi",
  //     date: "28/03/2026",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
  //   },
  //   {
  //     id: 5,
  //     title: "Xeber adi",
  //     date: "25/03/2026",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
  //   },
  //   {
  //     id: 6,
  //     title: "Xeber adi",
  //     date: "20/03/2026",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur. Feugiat aliquam sem at et proin amet ut.",
  //   },
  // ];

  return (
    <>
      <Helmet>
        <title>Umnaz Memarlıq MMC / Xəbərlər</title>
        <meta name="description" content="Xəbərlər" />
      </Helmet>

      <HeroSection title="Xəbərlər" bgImage={BgImg} />
      <section id="news-page">
        <div className="news-page container">
          <div className="news-grid row">
            {news.map((item) => (
              <div
                key={item.id}
                className="news-card col-12 col-md-6 col-lg-3 "
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
                        item?.text?.[currentLanguage] || item?.text?.az || "",
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

export default NewsPage;
