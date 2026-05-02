import web from "../assets/web.png";
import brand from "../assets/brand.png";
import appdev from "../assets/appdev.png"; // Ensure this is imported
import consult from "../assets/consult.png";
import uiux from "../assets/uiux.png";
import ai from "../assets/ai.png";
function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-intro">
          <h2 className="title-reveal">Our <span className="highlight">Core</span> Expertise</h2>
          <p>We don't just build software, we craft digital legacies.</p>
        </div>

        <div className="services-grid">
          {[
            { 
      img: web, 
      title: "Web Development", 
      desc: "Architecting scalable, full-stack solutions with the MERN and Next.js ecosystem.", 
      delay: "0.1s" 
    },
    { 
      img: appdev, 
      title: "Mobile Development", 
      desc: "Building native-feel, offline-first mobile applications using React Native and Expo.", 
      delay: "0.15s" 
    },
    { 
      img: uiux, 
      title: "UI/UX Design", 
      desc: "Crafting pixel-perfect, minimalist interfaces focused on user engagement and accessibility.", 
      delay: "0.2s" 
    },
    { 
      img: brand, 
      title: "Branding", 
      desc: "Developing sacred and professional visual identities that define your digital presence.", 
      delay: "0.25s" 
    },
    { 
      img: consult, 
      title: "Strategic Consulting", 
      desc: "Expert technical guidance on tech stack selection, architecture, and digital scaling.", 
      delay: "0.3s" 
    },
    { 
      img: ai, 
      title: "AI Engineering", 
      desc: "Build and Deploy intelligent systems that can learn form data and make decisions .", 
      delay: "0.35s" 
    }

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