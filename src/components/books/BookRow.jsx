// ! ---------------- IMPORTED MODULES -------------------------
import { useState } from "react";
// ! -----------------------------------------------------------

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

export default function BookRow({ book }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  // Define the specific fields you want to display
  const bookFields = [
    "title",
    "publish_date",
    "print_length",
    "series_volume",
    "publisher",
    "series",
    "author",
    "illustrator",
    "colorist",
    "inker",
    "letterer",
    "penciller",
  ];

  return (
    <tr
      className="book-row"
      onClick={toggleExpand}
      style={{ cursor: "pointer" }}
    >
      {/* Display the book cover image */}
      <td>
        <img
          className="books-table-cover-image"
          src={book.cover_image}
          alt={`${book.title} cover image`}
        />
      </td>

      {/* Map through bookFields and display each value */}
      {bookFields.map((field) => (
        <td key={field}>
          <div className={`expandable-content ${isExpanded ? "expanded" : ""}`}>
            {book[field] || ""}
          </div>
        </td>
      ))}
    </tr>
  );
}
