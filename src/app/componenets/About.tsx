import React from 'react';
import './style/about.css';

const About = () => {
  return (
    <section 
      className="about-section" 
      style={{ backgroundImage: "url('brownbg.jpg')" }} 
      id="about"
    >
      <div className="about-container" data-aos="zoom-out-down">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">We are a family-run bakery with a passion for quality and freshness.</p>
        <p className="about-text">Our recipes are crafted with the finest ingredients.</p>
      </div>
    </section>
  );
};

export default About;
