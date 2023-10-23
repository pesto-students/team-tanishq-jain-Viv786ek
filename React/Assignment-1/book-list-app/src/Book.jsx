import React from 'react';
import './Book.css';
function Book({ title, author, year }) {
  return (
    <div className='book'>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Year: {year}</p>
    </div>
  );
}

export default Book;
