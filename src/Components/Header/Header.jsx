// components/Header/Header.jsx
import React from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <img src="https://via.placeholder.com/40x40/4a6fa5/ffffff?text=NN" alt="NovelNest Logo" />
          <h1>Novel<span>Nest</span></h1>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#books">Books</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#testimonials">Reviews</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <a href="#"><FaSearch /></a>
          <a href="#"><FaUser /></a>
          <a href="#" className="cart-icon">
            <FaShoppingCart />
            <span className="cart-count">3</span>
          </a>
          <div className="mobile-menu-btn">
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;