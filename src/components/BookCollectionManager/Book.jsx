import React from "react";

function Book( { book, onDelete } ) {

    return (

        <li>
            <strong> {book.title}</strong>
            by {book.author} <br />
            Year: {book.year} <br />
            Publisher: {book.publisher} <br />
            ISBN: {book.isbn} <br />
            <button onClick={() => onDelete(book.id)}>Delete</button>
        </li>
    );
}

export default Book;