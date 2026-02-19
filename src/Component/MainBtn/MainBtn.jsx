import React from "react";
import Arrow from "../../assets/icons/arrowRight.svg";
import "./Style.scss";

function MainBtn() {
  return (
    <div className="main-btn">
      <button type="button">
        <div className="arrow">
          <img src={Arrow} alt="Arrow icon" />
        </div>

        <span>Mesaj Göndərin</span>
      </button>
    </div>
  );
}

export default MainBtn;
