
import logos from "../assets/logos.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logos} alt="Everlume Logo" />
            <span>Everlume</span>
          </div>
          <p>
            Architecting digital legacies through high-performance web, 
            mobile, and design solutions.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>

        <div className="footer-services">
          <h4>Expertise</h4>
          <ul>
            <li>Web Development</li>
            <li>Mobile Applications</li>
            <li>UI/UX Design</li>
            <li>Strategic Consulting</li>
            <li>AI Engineering</li>
          </ul>
        </div>

        {/* <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for tech insights.</p>
          <div className="newsletter-box">
            <input type="email" placeholder="Email Address" />
            <button className="arrow-btn">→</button>
          </div>
        </div> */}
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>&copy; {currentYear} Everlume. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;