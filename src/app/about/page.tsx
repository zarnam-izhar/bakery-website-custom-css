import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="container">
      <div className="content" data-aos="fade-up">
        <h1 className="title">About Us</h1>
        <p className="text">
          Welcome to <span className="highlight">Kawai Bakery!</span> We are a family-owned bakery dedicated to bringing you the finest, freshly-baked treats with love and passion. 
          Our journey began in 2010 with a simple mission: to create mouth-watering pastries and bread that would make our customers smile.
        </p>
        <p className="text">
          From our signature cupcakes to artisanal bread, everything we bake is made from scratch using the best ingredients. Our skilled bakers pour 
          their hearts into every recipe, ensuring that each bite is a delightful experience. We believe in quality, tradition, and innovation.
        </p>
        <p className="text">
          Whether you are here for your daily croissant or a custom cake for a special occasion, we take pride in being part of your life&apos;s moments, both big and small. 
          Come visit us at Sweet Crumbs Bakery and treat yourself to something delicious!
        </p>
        <h2 className="subheading">Our Mission</h2>
        <p className="text">
          At Sweet Crumbs Bakery, our mission is to deliver happiness one bite at a time. We strive to create baked goods that are not only delicious but also made with care and integrity.
        </p>
        <h2 className="subheading">Our Vision</h2>
        <p className="text">
          We envision a world where everyone can enjoy the simple pleasures of freshly baked bread and pastries, no matter where they are. That&apos;s why we&apos;re expanding our menu, introducing new flavors, and always looking for ways to better serve our community.
        </p>
      </div>
    </div>
  );
};

export default About;
