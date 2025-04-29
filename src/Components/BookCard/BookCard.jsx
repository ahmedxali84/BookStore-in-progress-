// components/BookCard/BookCard.jsx
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './BookCard.css';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <div className="book-img">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="book-info">
        <span className="book-category">{book.category}</span>
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">By {book.author}</p>
        <div className="book-price">
          <div className="price">${book.price} {book.originalPrice && <del>${book.originalPrice}</del>}</div>
          <div className="add-to-cart">
            <FaCartPlus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;