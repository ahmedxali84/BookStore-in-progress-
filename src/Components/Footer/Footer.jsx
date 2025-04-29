// components/Footer/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "Books", link: "#books" },
    { name: "Categories", link: "#categories" },
    { name: "Testimonials", link: "#testimonials" }
  ];

  const customerService = [
    { name: "My Account", link: "#" },
    { name: "Order Tracking", link: "#" },
    { name: "Wishlist", link: "#" },
    { name: "Shipping Policy", link: "#" },
    { name: "Returns & Refunds", link: "#" }
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo">
              <img src="https://via.placeholder.com/30x30/4a6fa5/ffffff?text=NN" alt="NovelNest Logo" />
              <h2>NovelNest</h2>
            </div>
            <p>Your premier destination for books of all genres. We're passionate about connecting readers with their next great read.</p>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaPinterest /></a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}><a href={link.link}>{link.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-links">
            <h3>Customer Service</h3>
            <ul>
              {customerService.map((service, index) => (
                <li key={index}><a href={service.link}>{service.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt /> 123 Book Street, Literary City, LC 12345</p>
            <p><FaPhone /> +1 (555) 123-4567</p>
            <p><FaEnvelope /> info@novelnest.com</p>
            <p><FaClock /> Mon-Fri: 9AM - 6PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 NovelNest. All Rights Reserved. | Designed with <FaHeart style={{ color: '#ff6b6b' }} /> by BookLovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;