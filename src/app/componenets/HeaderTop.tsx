import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './style/headertop.css';

const HeaderTop: React.FC = () => {
  return (
    <div className="header-top">
      <div className="header-container">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link facebook">
          <BsFacebook size={24} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link instagram">
          <BsInstagram size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
          <BsLinkedin size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link twitter">
          <BsTwitter size={24} />
        </a>
      </div>
    </div>
  );
};

export default HeaderTop;
