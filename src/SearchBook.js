import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';
import Book from './Book';
import './App.css';

class SearchBook extends Component {
  state = {
    query: '',
    allBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query });
  }

  clearQuery = () => {
    this.updateQuery('');
  }

  submitSearch = (query) => {
    this.updateQuery(query);

    BooksAPI.search(query.trim(), 20).then((result) => {
      if (!result || result.error || query.length < 1) {
        this.setState({ allBooks: [] });
      } else {
        const sortedBooks = this.props.books;
        const searchedBooks = result;

        sortedBooks.forEach((sortedBook) => {
          searchedBooks.forEach((searchedBook) => {
            if (!searchedBook.shelf) {
              searchedBook.shelf = 'none';
            }

            if (sortedBook.id === searchedBook.id) {
              searchedBook.shelf = sortedBook.shelf;
            }
          })
        });
        this.setState({ allBooks: searchedBooks });
      }
    })
  }

  render() {
    const { updateBook } = this.props;
    const { query, allBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.submitSearch(event.target.value)}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {allBooks.length > 0 && allBooks.map((book) => (
              <li key={book.id}>
                <Book key={book.id} book={book} updateBook={updateBook}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

SearchBook.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default SearchBook;
