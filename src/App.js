import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";

import SearchPage from "./SearchPage";
import BooksList from "./BooksList";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
    });
    BooksAPI.update({ id: "bUybAgAAQBAJ" }, "wantToRead").then((book) => {
      console.log(book);
    });
  }
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() => <BooksList />} />
          <Route path="/search" render={() => <SearchPage />} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
