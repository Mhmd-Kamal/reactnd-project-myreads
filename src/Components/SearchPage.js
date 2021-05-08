import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
class SearchPage extends Component {
  state = { searchResult: [] };

  handleChange = (event) => {
    BooksAPI.search(event.target.value).then((searchResult) => {
      // console.log(searchResult);
      const resultWithShelf = searchResult.map((result) => {
        // console.log(this.props.books);
        let newResult = result;
        this.props.books.map((book) => {
          if (book.id === result.id) {
            newResult = { ...result, shelf: book.shelf };
            console.log(newResult);
          }
        });
        // console.log(newResult);
        return newResult;
      });
      console.log("resultWithShelf", resultWithShelf);
      this.setState({ searchResult: resultWithShelf });
    });
  };

  render() {
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.searchResult.map((book) => (
                <Book updateShelf={this.props.updateShelf} key={book.id} book={book} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
