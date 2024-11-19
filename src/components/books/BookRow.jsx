export default function BookRow({ book }) {
  console.log(`WE GOT BOOK: ${book.title}`);
  const handleRowClick = () => {
    console.log(`Row clicked for book ID: ${book.id}`);
  };

  return (
    <tr onClick={handleRowClick}>
      <td>
        <img
          className="books-table-cover-image"
          src={book.cover_image}
          alt={`${book.title} cover image`}
        />
      </td>
      <td>{book.title}</td>
      <td>{book.publish_date}</td>
      {/* <td>{book.description}</td> */}
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
      {/* <td>{book.genre}</td> */}
    </tr>
  );
}
