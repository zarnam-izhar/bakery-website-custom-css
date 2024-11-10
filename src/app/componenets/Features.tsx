import React from 'react';
import Image from 'next/image';
import './style/features.css';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title" data-aos="zoom-in">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card" data-aos="zoom-in">
            <Image
              src="/ingrediants.jpeg"
              alt="Quality Ingredients"
              width={500}
              height={192}
              className="feature-image"
            />
            <h3 className="feature-title">Quality Ingredients</h3>
            <p className="feature-description">We use only the best ingredients for our baked goods.</p>
          </div>
          <div className="feature-card" data-aos="zoom-in">
            <Image
              src="/Orange-.jpg"
              alt="Custom Designs"
              width={500}
              height={192}
              className="feature-image"
            />
            <h3 className="feature-title">Custom Designs</h3>
            <p className="feature-description">Get a cake designed just for your special occasion!</p>
          </div>
          <div className="feature-card" data-aos="zoom-in">
            <Image
              src="/fast.jpg"
              alt="Fast Delivery"
              width={500}
              height={192}
              className="feature-image"
            />
            <h3 className="feature-title">Fast Delivery</h3>
            <p className="feature-description">We deliver your orders promptly and safely.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
