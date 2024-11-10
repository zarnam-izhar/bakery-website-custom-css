import React from 'react';
import Link from 'next/link';
import './style/hero.css';

const Hero: React.FC = () => {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: "url('/bg-brown.jpg')" }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Our Bakery</h1>
        <p className="hero-subtitle">Delicious cakes and pastries made with love!</p>
        <Link href="/shop">
          <button className="hero-button">
            View Our Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
