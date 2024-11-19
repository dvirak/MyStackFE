import BookRow from "./BookRow";

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
            <th>Publlisher</th>
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
