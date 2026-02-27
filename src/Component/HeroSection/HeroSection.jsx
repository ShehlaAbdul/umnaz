import React from "react";
import { Link } from "react-router-dom";
import "./Style.scss";
import { motion } from "framer-motion";

function HeroSection({ title, bgImage }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <motion.div
        className="hero-overlay"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        viewport={{ once: false }}
      >
        <h2>{title}</h2>

        <div className="breadcrumb">
          <Link to="/">Ana səhifə</Link>
          <span> &gt; </span>
          <span className="active">{title}</span>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
