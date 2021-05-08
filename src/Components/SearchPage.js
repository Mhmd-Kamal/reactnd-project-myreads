import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
class SearchPage extends Component {
  // state = { searchResult: [] };

  // handleChange = (event) => {
  //   BooksAPI.search(event.target.value).then((searchResult) => {
  //     const resultWithShelf = copyShelfState(searchResult, this.props.books);

  //     console.log("resultWithShelf", resultWithShelf);
  //     this.setState({ searchResult: resultWithShelf });
  //   });
  // };

  render() {
    // console.log("result", this.props.searchResult);
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.props.handleSearch}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.searchResult.map((book) => (
                <Book updateShelf={this.props.updateShelf} key={book.id} book={book} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

// const copyShelfState = (searchResult, booksOnShelves) => {
//   const resultWithShelf = searchResult.map((result) => {
//     // console.log(this.props.books);
//     let newResult = result;
//     booksOnShelves.map((book) => {
//       if (book.id === result.id) {
//         newResult = { ...result, shelf: book.shelf };
//         console.log(newResult);
//       }
//     });
//     // console.log(newResult);
//     return newResult;
//   });
//   return resultWithShelf;
// };

export default SearchPage;
// console.log(searchResult);
// const resultWithShelf = searchResult.map((result) => {
//   // console.log(this.props.books);
//   let newResult = result;
//   this.props.books.map((book) => {
//     if (book.id === result.id) {
//       newResult = { ...result, shelf: book.shelf };
//       console.log(newResult);
//     }
//   });
//   // console.log(newResult);
//   return newResult;
// });
