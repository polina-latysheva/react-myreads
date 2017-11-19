import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function Book (props) {
  const { book, updateBook } = props;
  const imgURL = book.imageLinks && book.imageLinks.smallThumbnail && book.imageLinks.thumbnail ? book.imageLinks.smallThumbnail : '';

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${imgURL})`
          }}></div>
        <div className="book-shelf-changer">
          <select value={book.shelf} onChange={(event) => updateBook(book, event.target.value)}>
            <option value="moveto" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.map((author) => (
          <span key={author}>{author}</span>
        ))}
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default Book;
