import React from "react";
import * as BooksAPI from "./BooksAPI";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import SearchPage from "./Components/SearchPage";
import BooksList from "./Components/BooksList";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResult: [],
  };

  handleSearch = (event) => {
    BooksAPI.search(event.target.value)
      .then((searchResult) => {
        // console.log(searchResult);
        this.copyShelfState(searchResult, this.state.books);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ searchResult: [] });
      });
  };

  // copy shelf state of my books to search results
  copyShelfState = (searchResult, booksOnShelves) => {
    const resultWithShelf = searchResult.map((result) => {
      // console.log(this.props.books);
      let newResult = result;
      booksOnShelves.map((book) => {
        if (book.id === result.id) {
          newResult = { ...result, shelf: book.shelf };
        }
      });

      return newResult;
    });

    this.setState({ searchResult: resultWithShelf });
  };

  updateShelf = (shelf, id) => {
    BooksAPI.update({ id: id }, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books: books });
        this.copyShelfState(this.state.searchResult, this.state.books);
      });
    });
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  resetSearch = () => {
    this.setState({ searchResult: [] });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Route
            exact
            path="/"
            render={() => (
              <BooksList
                books={this.state.books}
                updateShelf={this.updateShelf}
                resetSearch={this.resetSearch}
              />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <SearchPage
                searchResult={this.state.searchResult}
                handleSearch={this.handleSearch}
                updateShelf={this.updateShelf}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
