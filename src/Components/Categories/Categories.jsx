// components/Categories/Categories.jsx
import React from 'react';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x150/4a6fa5/ffffff?text=Fiction",
      name: "Fiction",
      count: "5000+ Titles"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x150/166088/ffffff?text=Non-Fiction",
      name: "Non-Fiction",
      count: "3500+ Titles"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x150/4fc3f7/ffffff?text=Science+Fiction",
      name: "Science Fiction",
      count: "2800+ Titles"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x150/28a745/ffffff?text=Fantasy",
      name: "Fantasy",
      count: "3200+ Titles"
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300x150/ffc107/ffffff?text=Mystery",
      name: "Mystery",
      count: "2100+ Titles"
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300x150/dc3545/ffffff?text=Romance",
      name: "Romance",
      count: "3800+ Titles"
    }
  ];

  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="section-title">
          <h2>Browse Categories</h2>
          <p>Find books by your favorite genre</p>
        </div>
        <div className="categories-container">
          {categories.map(category => (
            <div className="category-card" key={category.id}>
              <div className="category-img">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-info">
                <h3>{category.name}</h3>
                <p>{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;