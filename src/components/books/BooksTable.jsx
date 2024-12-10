// ! ----------------- IMPORTED FILES --------------------------
import BookRow from "./BookRow";
// ! -----------------------------------------------------------

/**
 * Description: A table component that displays a list of books with details such as cover image, title, author, and other relevant information.
 *
 * @param {Array<Object>} bookList - An array of book objects. Each object should have properties such as `id`, `title`, `cover_image`, `author`, `publish_date`, etc., that are used to render the book rows in the table.
 * @returns {JSX.Element} A JSX element rendering a table of books, with each row representing a book and its details.
 *
 * @precondition The `bookList` array must be populated with book objects before being passed to this component.
 * @postcondition A table displaying each book's details is rendered on the screen.
 */

export default function BooksTable({ bookList }) {
  return (
    <>
      <table>
        <caption className="books-table-caption">Heres The Books!</caption>
        <thead>
          <tr>
            <th>Cover Image</th>
            <th>Title</th>
            <th>Publish Date</th>
            {/* <th>Description</th> */}
            <th>Print Length</th>
            <th>Series Volume</th>
            <th>Publisher</th>
            <th>Series</th>
            <th>Author</th>
            <th>Illustrator</th>
            <th>Colorist</th>
            <th>Inker</th>
            <th>Letterer</th>
            <th>Penciller</th>
            {/* <th>Genre</th> */}
          </tr>
        </thead>
        <tbody>
          {bookList.map((book) => (
            <BookRow key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </>
  );
}
