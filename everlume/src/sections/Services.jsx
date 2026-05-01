import web from "../assets/web.png";
import brand from "../assets/branding.png";
import appdev from "../assets/appdev.png"; // Ensure this is imported
import consult from "../assets/consult.png";
import uiux from "../assets/uiux.png";
function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-intro">
          <h2 className="title-reveal">Our <span className="highlight">Core</span> Expertise</h2>
          <p>We don't just build software; we craft digital legacies.</p>
        </div>

        <div className="services-grid">
          {[
            { img: web, title: "Web Development", desc: "High-performance MERN applications.", delay: "0.1s" },
            { img: appdev, title: "Mobile App Development", desc: "High-performance MERN applications.", delay: "0.1s" },
            { img: uiux, title: "UI/UX Design", desc: "User-centric interfaces that convert.", delay: "0.2s" },
            { img: brand, title: "Branding", desc: "Visual identities that resonate.", delay: "0.3s" },
            { img: consult, title: "Consulting", desc: "Expert scaling and tech strategy.", delay: "0.4s" }
          ].map((service, index) => (
            <div className="lively-card" key={index} style={{ "--delay": service.delay }}>
              <div className="image-container">
                <div className="glow-bg"></div>
                {service.isEmoji ? (
                  <span className="service-emoji">{service.img}</span>
                ) : (
                  <img src={service.img} alt={service.title} className="service-img" />
                )}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="learn-more">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Services;