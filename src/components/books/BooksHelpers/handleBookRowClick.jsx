/**
 * Handles the click event on the table row, logging the book's ID.
 *
 * @precondition The `book` object must be passed into this component with a valid `id`.
 * @postcondition Logs the book's ID to the console when the row is clicked.
 */
export default function handleRowClick(book) {
  console.log(`Row clicked for book ID: ${book.id}`);
}
