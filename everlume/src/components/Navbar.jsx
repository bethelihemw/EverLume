import { useState, useEffect } from "react";
import logos from "../assets/logos.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-content">
        <div className="logo-wrapper" onClick={() => scrollToSection("home")}>
          <img src={logos} alt="EverLume Logo" className="nav-logo-img" />
          <h2 className="logo-text">EverLume</h2>
        </div>

        {/* Hamburger Icon */}
        <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("services")}>Services</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li className="nav-cta" onClick={() => scrollToSection("contact")}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;