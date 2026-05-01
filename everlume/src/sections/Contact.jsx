function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <div className="contact-info">
          <span className="badge">Get In Touch</span>
          <h2>Let’s Build Something <span className="text-gradient">Great</span></h2>
          <p>
            Ready to illuminate your digital presence? Whether you have a specific project 
            in mind or just want to explore the possibilities, we're here to help.
          </p>
          
          <div className="contact-methods">
            <div className="method-item">
              <span className="icon">📧</span>
              <div>
                <h4>Email Us</h4>
                <p>everlumetechnologies@gmail.com</p>
              </div>
            </div>
            <div className="method-item">
              <span className="icon">📍</span>
              <div>
                <h4>Location</h4>
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="modern-form">
            <div className="input-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@company.com" required />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message <span>→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;