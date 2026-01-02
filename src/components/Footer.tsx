import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <h3>Dear One.</h3>
            <p>Personalized gifts for your loved ones</p>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <a href="#">All Products</a>
            <a href="#">Custom Gifts</a>
            <a href="#">Best Sellers</a>
            <a href="#">New Arrivals</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
            <a href="#">Shipping Info</a>
            <a href="#">Returns</a>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Dear One. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;