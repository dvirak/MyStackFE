// ! ----------------- IMPORTED FILES --------------------------
import { baseURL } from "../dataAPI";
// ! -----------------------------------------------------------

/**
 * Description: Fetches all books from the backend API at the `/books` endpoint.
 *
 * @returns {Promise<Array>} Resolves with an array of book objects if successful. Logs and returns `undefined` in case of an error.
 * @throws {Error} Logs any error that occurs during the API request or while parsing the response.
 *
 * @precondition The backend server must be running and accessible at the specified `baseURL`.
 * @postcondition Returns a parsed array of books from the API if successful.
 */

export default async function getAllBooks() {
  try {
    // Send a GET request to the `/books` endpoint
    const response = await fetch(`${baseURL}/books`);

    // Parse the response JSON into a JavaScript array
    const booksArray = await response.json();

    // Log the response for debugging purposes
    console.log("IT WORKED?!?");
    console.log(booksArray);

    // Return the array of books
    return booksArray;
  } catch (error) {
    // Handle and log any errors
    console.log(error);
  }
}
