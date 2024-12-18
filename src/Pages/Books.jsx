// ! ----------------- IMPORTED FILES --------------------------
import useRetrieveBookList from "../components/books/useRetrieveBookList";
import BooksTable from "../components/books/BooksTable";
// ! -----------------------------------------------------------

/**
 * Description: A React component that retrieves a list of books using the `useRetrieveBookList` custom hook
 * and displays them in a table using the `BooksTable` component.
 *
 * @returns {JSX.Element} The rendered books component, which includes a table of books.
 *
 * @precondition The `useRetrieveBookList` hook must correctly fetch and return the list of books.
 * @postcondition The list of books is passed to the `BooksTable` component for rendering.
 */
export default function Books() {
  // Retrieves the list of books using the custom hook
  const bookList = useRetrieveBookList();

  return (
    <>
      {/* Passes the book list to the BooksTable component for display */}
      <BooksTable bookList={bookList} />
    </>
  );
}
