import "../index.css"

function Home() {
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <section id="home" className="hero">
      <div className="container hero-wrapper">
        <div className="hero-text">
          <span className="badge">Next-Gen Software Solutions</span>
          <h1>Illuminate Your <span className="text-gradient">Digital Presence</span></h1>
          <p className="exper">
            Everlume crafts high-performance digital experiences. 
            We turn complex problems into clean, scalable, and powerful software.
          </p>
          <p className="lead-para">
              At EverLume, we don't just write code, we architect digital legacies. Our expertise 
              spans the entire digital ecosystem.
            </p>
          <div className="hero-btns">
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Get Started</button>
            <button onClick={() => scrollToSection('services')} className="btn btn-outline">View Our Work</button>
          </div>
        </div>
        
        <div className="hero-visual">
        {/* This is the abstract glow you already have */}
        <div className="abstract-shape"></div>
        <div className="floating-card">
          <div className="card-header">
            <div className="browser-dots">
              <span></span><span></span><span></span>
            </div>
            <div className="browser-bar">everlume.dev/analytics</div>
          </div>
          <div className="card-stats">
            <div className="stat-item">
              <small>System Uptime</small>
              <strong>99.9%</strong>
            </div>
            <div className="stat-graph">
              <div className="bar" style={{height: '40%'}}></div>
              <div className="bar" style={{height: '70%'}}></div>
              <div className="bar" style={{height: '55%'}}></div>
              <div className="bar" style={{height: '90%'}}></div>
            </div>
          </div>
        </div>
        <div className="tech-badge react">React</div>
        <div className="tech-badge node">Node.js</div>
        <div className="tech-badge flutter">Flutter</div>
        <div className="tech-badge java">Java</div>
        <div className="tech-badge kotlin">Kotlin</div>
        <div className="tech-badge javascript">TypeScript</div>
        <div className="tech-badge python">Python</div>
        <div className="tech-badge php">PHP</div>
        <div className="tech-badge sql">SQL</div>
        <div className="tech-badge firebase">Firebase</div>
        {/* <div className="tech-badge code">code</div> */}
      </div>
      </div>
      <div className="hero-waves">
         {/* Optional: Add a subtle wave or glow at the bottom */}
      </div>
    </section>
  );
}

export default Home;