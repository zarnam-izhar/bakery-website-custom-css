'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Hero from './componenets/Hero';
import About from './componenets/About';
import Menu from './componenets/Menu';
import Features from './componenets/Features';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: true, 
    });
  }, []);

  return (
    <div>
      <Hero />
      <Menu />
      <About />
      <Features />
    </div>
  );
};

export default Home;
