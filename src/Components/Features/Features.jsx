// components/Features/Features.jsx
import React from 'react';
import { FaShippingFast, FaBookOpen, FaHeadset } from 'react-icons/fa';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description: "Get your books delivered to your doorstep within 2-3 business days with our premium shipping service."
    },
    {
      icon: <FaBookOpen />,
      title: "Wide Selection",
      description: "Choose from over 100,000 titles across all genres, including rare and hard-to-find editions."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Our dedicated customer service team is available round the clock to assist you with any queries."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>We provide the best service for book lovers</p>
        </div>
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;