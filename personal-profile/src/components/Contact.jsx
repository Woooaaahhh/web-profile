import { useEffect, useRef } from 'react';

function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <a href="mailto:andreiasnan125@gmail.com" className="contact-link">
                andreiasnan125@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <a href="tel:+639071034429" className="contact-link">
                +63 907 103 4429
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span className="contact-text">Windfield 2, Gulod, Cabuyao, Laguna</span>
            </div>
          </div>
          <div className="social-links">
            <h3>Follow Me</h3>
            <div className="social-grid">
              <a href="https://github.com/Woooaaahhh" target="_blank" rel="noreferrer" className="social-link">
                <span className="social-icon">🐙</span>
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-link">
                <span className="social-icon">LI</span>
                LinkedIn
              </a>
              <a href="https://x.com/Osdreiii" target="_blank" rel="noreferrer" className="social-link">
                <span className="social-icon">𝕏</span>
                X
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form className="form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;