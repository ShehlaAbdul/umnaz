import React from "react";
import { Link } from "react-router-dom";
import "./Style.scss";

function HeroSection({ title, bgImage }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay">
        <h2>{title}</h2>

        <div className="breadcrumb">
          <Link to="/">Ana səhifə</Link>
          <span> &gt; </span>
          <span className="active">{title}</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
