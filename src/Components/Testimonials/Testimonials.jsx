// components/Testimonials/Testimonials.jsx
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've been ordering from NovelNest for years and they never disappoint. The books always arrive in perfect condition and their customer service is exceptional.",
      author: "Sarah M.",
      role: "Regular Customer",
      rating: 5,
      image: "https://via.placeholder.com/100x100/cccccc/333333?text=SM"
    },
    {
      id: 2,
      text: "Their collection of rare books is impressive. I found a first edition I'd been searching for years at a reasonable price. Highly recommended for collectors!",
      author: "James D.",
      role: "Book Collector",
      rating: 4.5,
      image: "https://via.placeholder.com/100x100/cccccc/333333?text=JD"
    },
    {
      id: 3,
      text: "As an avid reader, I appreciate their fast shipping and great prices. The website is easy to navigate and their recommendations are always spot on.",
      author: "Emily R.",
      role: "Book Enthusiast",
      rating: 5,
      image: "https://via.placeholder.com/100x100/cccccc/333333?text=ER"
    }
  ];

  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" />);
    }
    
    return stars;
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Hear from our satisfied readers</p>
        </div>
        <div className="testimonials-container">
          {testimonials.map(testimonial => (
            <div className="testimonial-card" key={testimonial.id}>
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-img">
                  <img src={testimonial.image} alt={testimonial.author} />
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                  <div className="rating">
                    {renderRating(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;