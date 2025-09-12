# Self-Assessment  of Code

# Book Collection Manager

### Extracted Book Component

Initially the created book items were rendered inline in the 'BookCollectionManager.jsx'

```javascript
// Filter jobs by salary range
    <ol>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ol>
```

The new code separates a `Book`component into its own file and the `.map` iterates through each entry

```javascript
    <ol>
        {books.map((book) => (
          <Book key={book.id} newBook={newBook} book={book} onDelete={deleteBook} />
        ))}
      </ol>
```

This makes the code more readable and reusable. It also allows easier styling of individual books.

```javascript
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
```

---

### Example 2: Book id:s

The original code generated book id based on the index of the book when iterating through the `books` list

```javascript
<ol>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            <button onClick={() => deleteBook(index)}>Delete</button>
          </li>
        ))}
      </ol>
```
```javascript
<li key={index}>
```
 
The new code generates the id when originally making the book object

```javascript
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
```

This can cause errors when reordering the list

```javascript
          id: Date.now(),
```

### Solution:

The new code generates the id when originally making the book object

```javascript
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
```

```javascript
          id: Date.now(),
```

This way reordering the books wont cause any errors

**Lessons Learned:**

**useState setup:**
Instead of:

```javascript
const [title, setNewTitle] = usestate("")
const [author, setNewauthor] = usestate("")
const [year, setNewyear] = usestate("")
const [publisher, setNewyear] = usestate("")
const [isbn, setNewIsbn] = usestate("")
```
you can use:

```javascript
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    publisher: "",
    isbn: "",
  });
```