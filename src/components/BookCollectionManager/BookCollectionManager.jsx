import React, { useState } from "react";
import Book from "./Book";
import "./BookCollectionManager.css";

function BookCollectionManager() {

  const [books, setBooks] = useState([]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    publisher: "",
    isbn: "",
  });

  // Handle input change for both fields
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  }

  // Add book
  function addBook() {
    if (
      newBook.title.trim() &&
      newBook.author.trim() &&
      newBook.year.trim() &&
      newBook.publisher.trim() &&
      newBook.isbn.trim()
    ) {
      setBooks((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: newBook.title,
          author: newBook.author,
          year: newBook.year,
          publisher: newBook.publisher,
          isbn: newBook.isbn,
        },
      ]);

      // clear inputs
      setNewBook({ title: "", author: "", year: "", publisher: "", isbn: "" });
    }
  }

  // Delete book
  function deleteBook(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  return (
    <div className="book-collection">
      <h1>Book Collection Manager</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Enter book title..."
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter author..."
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Enter year..."
          name="year"
          value={newBook.year}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter publisher..."
          name="publisher"
          value={newBook.publisher}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enter ISBN..."
          name="isbn"
          value={newBook.isbn}
          onChange={handleInputChange}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <ol>
        {books.map((book) => (
          <Book key={book.id} newBook={newBook} book={book} onDelete={deleteBook} />
        ))}
      </ol>
    </div>
  );
};

export default BookCollectionManager;