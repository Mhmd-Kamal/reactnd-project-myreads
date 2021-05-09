import React from "react";

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={
            props.book.imageLinks === undefined
              ? {
                  width: 128,
                  height: 193,
                }
              : {
                  width: 128,
                  height: 193,
                  backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
                }
          }
        />
        <div className="book-shelf-changer">
          <select
            value={props.book.shelf ? props.book.shelf : "none"}
            onChange={(event) => {
              props.updateShelf(event.target.value, props.book.id);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
};

export default Book;
