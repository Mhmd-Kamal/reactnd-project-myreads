import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bookhelf from "./BookShelf";
class BooksList extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookhelf
              updateShelf={this.props.updateShelf}
              title="Currently Reading"
              ShelfBooks={this.props.books.filter((book) => book.shelf === "currentlyReading")}
            />
            <Bookhelf
              updateShelf={this.props.updateShelf}
              title="Want to Read"
              ShelfBooks={this.props.books.filter((book) => book.shelf === "wantToRead")}
            />
            <Bookhelf
              updateShelf={this.props.updateShelf}
              title="Read"
              ShelfBooks={this.props.books.filter((book) => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button onClick={this.props.resetSearch}>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
