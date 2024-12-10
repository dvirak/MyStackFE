// ! ----------------- IMPORTED FILES --------------------------
import getAllBooks from "../../API/BooksAPI/getAllBooks";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useEffect, useState } from "react";
// ! -----------------------------------------------------------

/**
 * Description: Custom React hook to retrieve a list of books from an API.
 * Handles API calls, error logging, and manages state for the book list.
 *
 * @returns {Array} An array of book objects retrieved from the API.
 *
 * @throws {Error} Logs an error if the API call fails.
 *
 * @precondition The `getAllBooks` API function must be properly implemented and available.
 * @postcondition Returns the retrieved book list or an empty array in case of failure.
 */

export default function useRetrieveBookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        // Retrieve all books from the API
        const allBooks = await getAllBooks();

        // Log the retrieved books for debugging
        console.log("HERES ALL BOOKS: ");
        console.log(allBooks);

        // Update the book list state with the retrieved data
        setBookList(allBooks);
      } catch (error) {
        // Log any errors during the fetch process
        console.log("Failed to fetch books: ", error);
      }
    }

    // Trigger the fetchBooks function
    fetchBooks();
  }, []);

  return bookList;
}
