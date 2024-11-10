import React from 'react';

import Image from 'next/image';
import './Shop.css'; 

const Shop = () => {
  const bakeryItems = [
    { id: 1, name: 'Chocolate Cake', price: 20, image: '/chocolate-cake.jpg' },
    { id: 2, name: 'Vanilla Cupcake', price: 3, image: '/vanilla.jpg' },
    { id: 3, name: 'Croissant', price: 2, image: '/Perfect-Croissant.webp' },
    { id: 4, name: 'Orange Cake', price: 25, image: '/orange-cake.jpg' },
    { id: 5, name: 'Strawberry Tart', price: 15, image: '/tarts.jpg' },
    { id: 6, name: 'Blueberry Muffin', price: 3, image: '/Blueberry2.jpg' },
  ];

  return (
    <section className="section" id="shop">
      <div className="container">
        <h2 className="title">Shop Our Bakery Items</h2>
        <div className="grid">
          {bakeryItems.map((item) => (
            <div key={item.id} className="shop-item">
              <div className="shop-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={320}
                  height={320}
                  className="shop-image-content"
                />
              </div>
              <h3 className="shop-item-name">{item.name}</h3>
              <p className="shop-item-price">${item.price}</p>
              <button className="shop-add-button">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
