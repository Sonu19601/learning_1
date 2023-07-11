import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import { books } from "./books";
import Book from "./book";
const BookList = () => {
  const getBook = (id) => {
    const tempBook = books.find((book) => book.id == id);
    console.log(tempBook);
  };
  return (
    <section className="booklist">
      <div style={{ margin: 1 }}>
        <h2 style={{ color: "white" }}>Best Sellers</h2>
        <br />
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              index={index}
            ></Book>
          );
        })}
      </div>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList></BookList>);
