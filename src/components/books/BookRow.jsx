/**
 * Description: Represents a table row displaying details of a single book.
 * Handles click events on the row to log the book's ID for potential navigation or further actions.
 *
 * @param {Object} book - The book object containing properties such as title, author, and publisher.
 * @returns {JSX.Element} A table row element containing various book details.
 *
 * @precondition The `book` object must contain valid properties such as `id`, `title`, `cover_image`, etc.
 * @postcondition The table row is rendered with book details and handles row click events for additional functionality.
 */

import handleRowClick from "./BooksHelpers/handleBookRowClick";

export default function BookRow({ book }) {
  // Log the book title to the console for debugging
  console.log(`WE GOT BOOK: ${book.title}`);

  return (
    <tr onClick={handleRowClick(book)}>
      {/* Display the book cover image */}
      <td>
        <img
          className="books-table-cover-image"
          src={book.cover_image}
          alt={`${book.title} cover image`}
        />
      </td>
      <td>{book.title}</td>
      <td>{book.publish_date}</td>
      <td>{book.print_length}</td>
      <td>{book.series_volume}</td>
      <td>{book.publisher}</td>
      <td>{book.series}</td>
      <td>{book.author}</td>
      <td>{book.illustrator}</td>
      <td>{book.colorist}</td>
      <td>{book.inker}</td>
      <td>{book.letterer}</td>
      <td>{book.penciller}</td>
    </tr>
  );
}
