import React, { Component } from 'react';
// import * as BooksAPI from './BooksAPI';
import Book from './Book';
import './App.css';

class ShelfLists extends Component {

  render() {
    const {shelfs, books} = this.props
    console.log('Shelf.js - this.props', this.props)

    // let listOfShelfs = Object.values(shelfs).filter((shelf) => shelf !== 'none')

    // TODO: is it better to move filtered shelfs to ListBooks component ?
    let listOfShelfs = shelfs.filter((shelf) => shelf.id !== 'none')

    console.log('Shelf.js - listOfShelfs', listOfShelfs)

    return (
      <div>
        {/*
        {listOfShelfs.map((shelf) => (
          <div key={shelf} className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>

            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => (
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
        */}
        {listOfShelfs.map((shelf) => (
          <div key={shelf.id} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {/* TODO: sort books after fetching instead of filter them here? */}
                {(books.filter((book) => book.shelf === shelf.id)).map((book) => (
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default ShelfLists
