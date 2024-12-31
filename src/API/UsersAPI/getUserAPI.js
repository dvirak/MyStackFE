// ! ----------------- IMPORTED FILES --------------------------
import { baseURL } from "../dataAPI";
// ! -----------------------------------------------------------

/**
 * Description: Fetches details of the current user from the backend API using their user ID and authentication token.
 *
 * @returns {Promise<Object>} Resolves with the user details as a JSON object if the API request is successful. Logs and returns `undefined` in case of an error.
 * @throws {Error} Logs any error that occurs during the API request or while parsing the response.
 *
 * @precondition The backend server must be running and accessible at the specified `baseURL`.
 *               The `userID` and `currentUserToken` must exist in localStorage for authentication.
 * @postcondition Returns a JSON object with the user's details if the request succeeds.
 */

const currentUserToken = localStorage.getItem("current-user-key");
const userID = localStorage.getItem("user-id");

export default async function getUserAPI() {
  try {
    // Send a GET request to the `/users/user/:userID` endpoint with authorization headers
    const response = await fetch(`${baseURL}/users/user/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUserToken}`,
      },
    });

    // Parse the response JSON into a JavaScript object
    const json = await response.json();

    // Return the user details
    return json;
  } catch (error) {
    // Handle and log any errors
    console.log(error);
  }
}
