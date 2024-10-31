import React, { useState } from "react";
import "./Navbar.css";
import { IoCallSharp } from "react-icons/io5";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <section className="nav-section">
        <div className="NavigationBar">
          <div className="content01">
            <div className="LogoDiv">
              <span>Itrechos</span>
            </div>
            <div className="MenuCall">
              <div className={`Menu ${isMobileMenuOpen ? "active" : ""}`}>
                <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="Call">
                <a className="CallA" href="tel:+998912800562">
                  <IoCallSharp />
                  +998912800562
                </a>
              </div>
              <div className="menu-toggle" onClick={toggleMobileMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
