import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';
import './App.css';

class ListBooks extends Component {
  render() {
    const { shelfs, books, updateBook } = this.props;
    const listOfShelfs = shelfs.filter((shelf) => shelf.id !== 'none');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {listOfShelfs.map((shelf) => (
            <BookShelf key={shelf.id} shelf={shelf} books={books} updateBook={updateBook}/>
          ))}
        </div>

        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

ListBooks.propTypes = {
  shelfs: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default ListBooks;
