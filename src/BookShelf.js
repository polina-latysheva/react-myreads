import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
import './App.css';

class BookShelf extends Component {
  render() {
    const {shelf, books, updateBook} = this.props;

    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelf.name}</h2>

          <div className="bookshelf-books">
            <ol className="books-grid">
              {(books.filter((book) => book.shelf === shelf.id)).map((book) => (
                <li key={book.id}>
                  <Book key={book.id} book={book} updateBook={updateBook}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default BookShelf;
