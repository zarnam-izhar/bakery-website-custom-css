import React from 'react';
import './globals.css'; 
import HeaderTop from './componenets/HeaderTop';
import Header from './componenets/Header';  
import Footer from './componenets/Footer'; 

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="bg-white antialiased">
        <HeaderTop />
        <Header />  
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
