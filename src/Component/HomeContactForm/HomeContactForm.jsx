import React, { useEffect, useState } from "react";
import "./Style.scss";
import MainBtn from "../MainBtn/MainBtn";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  addLanguageToPath,
  getCurrentLanguage,
} from "../../utils/languageUtils";
import { apiRequest } from "../../../utils/api";
import Swal from "sweetalert2";
import Arrow from "../../assets/icons/arrowRight.svg";


function HomeContactForm() {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    message: "",
  });
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  // Current language
  const currentLanguage = getCurrentLanguage(pathname);
  const lang = i18n.language.slice(0, 2);

  const createLanguageAwarePath = (path) =>
    addLanguageToPath(path, currentLanguage);

  // Fetch contacts from backend
  // useEffect(() => {
  //   apiRequest("/contacts")
  //     .then((res) => {
  //       if (res && res.data) {
  //         setContacts(res.data);
  //         console.log("Contacts from API:", res.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Contacts data fetch error:", err);
  //     });
  // }, []);
  
   // Form input dəyişikliklərini idarə etmək
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit - POST ilə backend-ə göndər
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://api.umnazmemarliq.az/api/v1/contacts", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        title: formData.title,
        message: formData.message,
      }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      console.log("Backend error:", data);
      throw new Error("Göndərilmədi");
    }

    console.log("SUCCESS:", data);

    // state update (istəsən)
    if (data) {
      setContacts((prev) => [...prev, data]);
    }

    setFormData({
      fullName: "",
      email: "",
      title: "",
      message: "",
    });

   Swal.fire({
     title: "Göndərildi!",
     icon: "success",
     draggable: true,
     background: "#1e1e1e", 
     color: "#fff", 
     confirmButtonColor: "#E2B361", 
   });

  } catch (err) {
    console.error("Xəta:", err);
   Swal.fire({
     title: "Form göndərilə bilmədi!",
     icon: "error",
     draggable: true,
     background: "#1e1e1e", 
     color: "#fff",
     confirmButtonColor: "#ff4d4f", 
   });
  }
};

  return (
    <section className="contact-section">
      <motion.div
        className="container"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Title */}
        <div className="contact-header">
          <p>{t("home.contact.title")}</p>
          <h2>{t("home.contact.subtitle")}</h2>
        </div>

        {/* Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <label>{t("home.contact.form.fullName.label")}</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t("home.contact.form.fullName.placeholder")}
              />
            </div>

            <div className="col-12 col-md-6">
              <label>{t("home.contact.form.email.label")}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("home.contact.form.email.placeholder")}
              />
            </div>

            <div className="col-12">
              <label>{t("home.contact.form.subject.label")}</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder={t("home.contact.form.subject.placeholder")}
              />
            </div>

            <div className="col-12">
              <label>{t("home.contact.form.message.label")}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder={t("home.contact.form.message.placeholder")}
              ></textarea>
            </div>

            <div className="col-12">
              {/* <MainBtn title={t("home.contact.form.btn")} type="submit" /> */}
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="main-btn"
              >
                <button type="submit" className="cta-btn">
                  <div className="arrow">
                    <img src={Arrow} alt="Arrow icon" />
                  </div>

                  <span>{t("home.contact.form.btn")}</span>
                </button>
              </motion.div>
            </div>
          </div>
        </form>

        {/* Display contacts from backend */}
        {contacts.length > 0 && (
          <div className="contacts-list mt-4">
            {contacts.map((contact) => (
              <div key={contact._id} className="contact-item">
                <p>
                  <strong>
                    {contact.fullName?.[lang] || contact.fullName}
                  </strong>
                </p>
                <p>{contact.email}</p>
                <p>{contact.title || contact.message?.[lang]}</p>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default HomeContactForm;
