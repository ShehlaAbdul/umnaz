import React, { useEffect, useState } from "react";
import "./Style.scss";
import Logo from "../../assets/images/logo_white.webp"
import { Link, useLocation , useNavigate} from "react-router-dom";
import "./Style.scss";
import { FaBars } from "react-icons/fa6";
import {
  addLanguageToPath,
  getCurrentLanguage,
  removeLanguageFromPath,
} from "../../utils/languageUtils";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
function Header() {
const languageDropdownRef = useRef(null);

  // const [lang, setLang] = useState("AZ");
  const navigate = useNavigate();
   const { t, i18n } = useTranslation();
   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
   const [selectedLanguage, setSelectedLanguage] = useState("Az");
 const { pathname } = useLocation();
    const currentLanguage = getCurrentLanguage(pathname);
    const createLanguageAwarePath = (path) => {
      return addLanguageToPath(path, currentLanguage);
    };
    const toggleLanguageDropdown = () => {
      setIsLanguageOpen(!isLanguageOpen);
    };
    const handleLanguageSelect = (selectedLanguage) => {
      setIsLanguageOpen(false);

      // Get current path without language prefix
      const pathWithoutLang = removeLanguageFromPath(pathname);

      // Create new path with selected language
      const newPath = addLanguageToPath(pathWithoutLang, selectedLanguage);

      // Change i18n language
      if (i18n && i18n.changeLanguage) {
        i18n.changeLanguage(selectedLanguage);
      }

      // Navigate to the new path
    
    };
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          languageDropdownRef.current &&
          !languageDropdownRef.current.contains(event.target)
        ) {
          setIsLanguageOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    useEffect(() => {
      // Update selected language display based on current URL language
      setSelectedLanguage(
        currentLanguage === "az"
          ? "Az"
          : currentLanguage === "en"
            ? "En"
            : currentLanguage === "ru"
              ? "Ru"
              : "Az",
      );
    }, [currentLanguage]);
  
  return (
    <nav className="navbar navbar-expand-lg p-0 px-0 ">
      <div className="container-fluid  ">
        <Link className="logo fw-bold" href="#">
          <img src={Logo} alt="" />
        </Link>
        <div
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <FaBars />
        </div>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          {/* Center Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {t("header.home")}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to={createLanguageAwarePath("/haqqimizda")}
              >
                {t("header.about")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/xidmetler">
                {t("header.services")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/layiheler">
                {t("header.projects")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/terefdaslar">
                {t("header.partners")}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/elaqe">
                {t("header.contact")}
              </Link>
            </li>
          </ul>

          {/* Language Switch */}
          <div className="d-flex gap-2">
            <div className="d-flex gap-2">
              {["az", "en"].map((item) => (
                <button
                  key={item}
                  className={`lan btn-sm ${currentLanguage === item ? "active" : ""}`}
                  onClick={() => handleLanguageSelect(item)}
                >
                  {item.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
