const baseURL = "http://localhost:3000/api/";

export default async function getAllBooks() {
  try {
    const response = await fetch(`${baseURL}/books`);
    const booksArray = await response.json();
    console.log("IT WORKED?!?");
    console.log(booksArray);
    return booksArray;
  } catch (error) {
    console.log(error);
  }
}
