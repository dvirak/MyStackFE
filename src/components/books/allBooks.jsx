import { useEffect, useState } from "react";
import getAllBooks from "../../API/BooksAPI/getAllBooks";
import Books from "./Books";

export default function AllBooks() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function retrieveBookList() {
      try {
        const allBooks = await getAllBooks();
        console.log("HERES ALL BOOKS: ");
        console.log(typeof allBooks);
        console.log(allBooks);
        setBookList(allBooks);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveBookList();
  }, []);
  return (
    <>
      <span>Hi</span>
      <Books books={bookList} />
      <table>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Description</td>
          <td>Cover Image</td>
        </tr>
        {bookList.map((book, index) => (
          <tr key={index}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.description}</td>
            <td>{book.cover_image}</td>
          </tr>
        ))}
        <tr></tr>
      </table>
    </>
  );
}
