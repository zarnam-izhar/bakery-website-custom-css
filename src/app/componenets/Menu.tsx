import React from 'react';
import Image from 'next/image';
import './style/menu.css';

const Menu = () => {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-container">
        <h2 className="menu-title">Our Menu</h2>
        <div className="menu-grid">
          
          {/* Chocolate Cake */}
          <div className="menu-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
            <Image src="/chocolate-cake.jpg" alt="Chocolate Cake" width={300} height={200} className="menu-image" />
            <h3 className="item-title">Chocolate Cake</h3>
            <p className="item-price">$20</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* Vanilla Cupcake */}
          <div className="menu-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
            <Image src="/vanilla.jpg" alt="Vanilla Cupcake" width={300} height={200} className="menu-image" />
            <h3 className="item-title">Vanilla Cupcake</h3>
            <p className="item-price">$3</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          {/* Croissant */}
          <div className="menu-item" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">
            <Image src="/Perfect-Croissant.webp" alt="Croissant" width={300} height={200} className="menu-image" />
            <h3 className="item-title">Croissant</h3>
            <p className="item-price">$2</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Menu;
