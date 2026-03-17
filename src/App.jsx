import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./styles/global.scss";
import "./styles/style.scss";
import MainLayout from "./Layout/MainLayout"
import Home from "./Pages/Home/Home";
import AboutPage from "./Pages/AboutPage/AboutPage";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css"; 
import Swiper from "swiper";
// import Swiper styles
import "swiper/css";import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Partners from "./Pages/Partners/Partners";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ProjectPage from "./Pages/ProjectPage/ProjectPage";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";
import { useTranslation } from "react-i18next";
import LanguageRedirect from "./Component/languageRedirect/LanguageRedirect";
import Loader from "./Component/Loader/Loader";
import { useEffect, useState } from "react";
  // import "./i18n/i18next.jsx";

AOS.init();
function App() {
  // const { i18n } = useTranslation();
  // if (!i18n.isInitialized) {
  //   return null;
  // }
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loader) return <Loader />;

  return (
    <>
      <BrowserRouter>
        <LanguageRedirect>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/haqqimizda" element={<AboutPage />} />
              <Route path="/terefdaslar" element={<Partners />} />
              <Route path="/elaqe" element={<ContactPage />} />
              <Route path="/xidmetler" element={<ServicesPage />} />
              <Route path="/layiheler" element={<ProjectPage />} />
              <Route path="/layiheler/:id" element={<ProjectDetail />} />
              {/* EN */}
              <Route path="/en" element={<Home />} />
              <Route path="/en/haqqimizda" element={<AboutPage />} />
              <Route path="/en/terefdaslar" element={<Partners />} />
              <Route path="/en/elaqe" element={<ContactPage />} />
              <Route path="/en/xidmetler" element={<ServicesPage />} />
              <Route path="/en/layiheler" element={<ProjectPage />} />
              <Route path="/en/layiheler/:id" element={<ProjectDetail />} />
            </Route>
          </Routes>
        </LanguageRedirect>
      </BrowserRouter>
    </>
  );
}

export default App
