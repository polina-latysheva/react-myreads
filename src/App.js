import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import * as shelfs from './constants/shelfs.js';
import ListBooks from './ListBooks';
import SearchBook from './SearchBook';
import './App.css';

class BooksApp extends Component {
  state = {
    shelfs: shelfs.shelfs,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    })
  }

  updateBook = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState((state) => ({
        books: state.books.filter((item) => item.id !== book.id).concat([book])
      }));
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListBooks shelfs={this.state.shelfs} books={this.state.books} updateBook={this.updateBook}/>
        )}/>
        <Route exact path='/search' render={({ history }) => (
          <SearchBook books={this.state.books} updateBook={this.updateBook}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
