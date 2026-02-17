import React from 'react';
import "./Style.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-content row g-0 justify-content-center align-items-center">
        <div className="col-12 col-md-8 col-xl-6">
          <h3>UMNAZ</h3>
        </div>
        <div className="col-12 col-md-8 col-xl-6">
                  <p>Copyright © 2024 UMNAZ. All rights reserved.</p>
                  <div className="logo">
                  </div>
        </div>
        <div className="footer-bottom row-cols g-0 d-md-flex p-2 justify-content-between">
          <div>© Bütün hüquqlar qorunur.</div>
          <div>Sayt hazırlandı: Birsayt.az</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
