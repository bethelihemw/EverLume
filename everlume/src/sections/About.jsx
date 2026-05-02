import logos from "../assets/logos.png";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container about-wrapper">
        <div className="about-text-content">
          <span className="about-badge">Our Story</span>
          <h2 className="about-title">" Smart Solutions, Brighter  <span className="orange-text">Future</span> "</h2>
          
          <div className="about-description">
            <div className="about-expertise-grid">
              <div className="exp-item">
                <h4>Full-Stack & Mobile</h4>
                <p>
                  From high-performance web platforms to native-feel <strong>mobile applications</strong>, 
                  we build scalable architectures that handle complex data with ease.
                </p>
              </div>

              <div className="exp-item">
                <h4>Design & Identity</h4>
                <p>
                  Our <strong>UI/UX design</strong> and <strong>branding</strong> teams ensure that your software 
                  isn't just functional, but visually captivating and intuitive for every user.
                </p>
              </div>

              <div className="exp-item">
                <h4>Strategic Consulting</h4>
                <p>
                  Beyond development, we offer <strong>strategic consulting</strong> to help you 
                  navigate tech stacks, optimize workflows, and scale your digital presence efficiently.
                </p>
              </div>
            </div>

            <p className="closing-para">
              Our team is dedicated to pushing the boundaries of what's possible, 
              turning complex technical challenges into seamless user experiences.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h4>50+</h4>
              <p>Projects Delivered</p>
            </div>
            <div className="stat-card">
              <h4>99%</h4>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card">
              <h4>24/7</h4>
              <p>Scalable Support</p>
            </div>
          </div>
        </div>

        <div className="about-visual-grid">
          <div className="grid-item item-1"></div>
          <div className="grid-item item-2"></div>
          <div className="grid-item item-3">
             <div className="logo-pulse">
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;