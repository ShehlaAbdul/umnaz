import React from "react";
import Arrow from "../../assets/icons/arrowRight.svg";
import "./Style.scss";
import { motion } from "framer-motion";

function MainBtn({title}) {
  return (
    <motion.div
      initial={{ scale: 0.4, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="main-btn"
    >
      <button type="button">
        <div className="arrow">
          <img src={Arrow} alt="Arrow icon" />
        </div>

        <span>{title}</span>
      </button>
    </motion.div>
  );
}

export default MainBtn;
