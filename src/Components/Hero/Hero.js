// components/Hero/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Discover Your Next Favorite Book</h1>
        <p>Explore our vast collection of books across all genres. From bestsellers to hidden gems, we have something for every reader.</p>
        <div className="hero-btns">
          <a href="#books" className="btn btn-white">Browse Books</a>
          <a href="#categories" className="btn btn-outline">View Categories</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;