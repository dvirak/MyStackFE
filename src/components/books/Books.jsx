// import { useEffect, useState } from "react";
import useRetrieveBookList from "./useRetrieveBookList";
import BooksTable from "./BooksTable";

export default function Books() {
  const bookList = useRetrieveBookList();

  return (
    <>
      <BooksTable bookList={bookList} />
    </>
  );
}
