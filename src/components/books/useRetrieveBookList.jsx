import { useEffect, useState } from "react";
import getAllBooks from "../../API/BooksAPI/getAllBooks";

export default function useRetrieveBookList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      try {
        const allBooks = await getAllBooks();
        console.log("HERES ALL BOOKS: ");
        console.log(allBooks);
        setBookList(allBooks);
      } catch (error) {
        console.log("Failed to fetch books: ", error);
      }
    }
    fetchBooks();
  }, []);

  return bookList;
}
