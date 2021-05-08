import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import SearchPage from "./Components/SearchPage";
import BooksList from "./Components/BooksList";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  updateShelf = (shelf, id) => {
    BooksAPI.update({ id: id }, shelf).then(() => {
      // console.log(books);
      BooksAPI.getAll().then((books) => {
        // console.log(books);
        this.setState({ books: books });
      });
    });
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // console.log(books);
      this.setState({ books: books });
    });
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => <BooksList books={this.state.books} updateShelf={this.updateShelf} />}
          />
          <Route
            path="/search"
            render={() => <SearchPage books={this.state.books} updateShelf={this.updateShelf} />}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
