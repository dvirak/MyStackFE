// import { useEffect, useState } from "react";
import useRetrieveBookList from "../components/books/useRetrieveBookList";
import BooksTable from "../components/books/BooksTable";

export default function Books() {
  const bookList = useRetrieveBookList();

  return (
    <>
      <BooksTable bookList={bookList} />
    </>
  );
}
