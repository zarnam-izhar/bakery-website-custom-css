"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './style/header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Image src="/store.jpeg" alt="Bakery Logo" width={70} height={100} className="logo-image" />
        </div>
        
       
        <button
          className="hamburger-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          
          <svg className="hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

       
        <nav className="navbar-desktop">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/shop" className="nav-link">Shop</Link> 
          <Link href="/contact" className="nav-link">Contact</Link> 
        </nav>
        
        <div className="order-now-desktop">
          <Link href="/shop">
            <button className="order-now-button">
              Order Now
            </button>
          </Link>
        </div>

        
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              <Link href="/" className="mobile-nav-link">Home</Link>
              <Link href="/about" className="mobile-nav-link">About</Link>
              <Link href="/shop" className="mobile-nav-link">Shop</Link> 
              <Link href="/contact" className="mobile-nav-link">Contact</Link> 
            </nav>
            <div className="order-now-mobile">
              <button className="order-now-button-mobile">
                Order Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
