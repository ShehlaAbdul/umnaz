import React from "react";
import "./Style.scss";
import Logo from "../../assets/images/logo_white.webp"
import { Link } from "react-router-dom";
import "./Style.scss";
import { FaBars } from "react-icons/fa6";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg p-0 px-0 ">
      <div className="container ">
        <Link className="logo fw-bold" href="#">
          <img src={Logo} alt="" />
        </Link>

        {/* Mobile Toggle Button */}
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
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
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ana səhifə
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/haqqimizda">
                Haqqımızda
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/xidmetler">
                Xidmətlər
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/partnyorlar">
                Partnyorlar
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/layiheler">
                Layihələr
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/terefdaslar">
                Tərəfdaşlar
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/elaqe">
                Əlaqə
              </Link>
            </li>
          </ul>

          {/* Language Switch */}
          <div className="d-flex gap-2">
            <button className="btn btn-outline-dark btn-sm">AZ</button>
            <button className="btn btn-outline-dark btn-sm">EN</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
