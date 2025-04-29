// components/FeaturedBooks/FeaturedBooks.jsx
import React from 'react';
import './FeaturedBooks.css';
import BookCard from "../BookCard/BookCard";


const FeaturedBooks = () => {
  const books = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x450/cccccc/333333?text=Book+Cover",
      category: "Fiction",
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: "12.99",
      originalPrice: "16.99"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x450/cccccc/333333?text=Book+Cover",
      category: "Science Fiction",
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: "14.99",
      originalPrice: "18.99"
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x450/cccccc/333333?text=Book+Cover",
      category: "Biography",
      title: "Becoming",
      author: "Michelle Obama",
      price: "15.99",
      originalPrice: "22.99"
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x450/cccccc/333333?text=Book+Cover",
      category: "Fantasy",
      title: "The Name of the Wind",
      author: "Patrick Rothfuss",
      price: "13.99",
      originalPrice: "17.99"
    }
  ];

  return (
    <section className="featured-books" id="books">
      <div className="container">
        <div className="section-title">
          <h2>Featured Books</h2>
          <p>Check out our curated selection of bestsellers</p>
        </div>
        <div className="books-container">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="../BookCard/BookCard.jsx" className="btn btn-primary">View All Books</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;