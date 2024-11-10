import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact-section">
      <div className="contact-container" data-aos="fade-up">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">We’d love to hear from you! Reach out with any questions or feedback.</p>
        <form className="contact-form">
          <div className="form-field">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-field">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-field">
            <textarea placeholder="Your Message" rows={4} required></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
