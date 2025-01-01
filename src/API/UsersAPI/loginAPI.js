// ! ----------------- IMPORTED FILES --------------------------
import { baseURL } from "../dataAPI";
// ! -----------------------------------------------------------

/**
 * Description: Sends a login request to the backend API with the provided user credentials.
 *
 * @param {Object} user - An object containing the user's login credentials.
 *                        Typically includes `username` (string) and `password` (string).
 * @returns {Promise<Object>} Resolves with the server's response as a JSON object if the request is successful. Logs and returns `undefined` in case of an error.
 * @throws {Error} Logs any error that occurs during the API request or while parsing the response.
 *
 * @precondition The backend server must be running and accessible at the specified `baseURL`.
 *               The `user` object must contain valid login credentials.
 * @postcondition Returns the server's response, which may include a success message, user details, and/or a token.
 */

export default async function loginAPI(user) {
  try {
    // Send a POST request to the `/users/login` endpoint with user credentials in the body
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user), // Convert the user object to a JSON string
    });

    // Parse the response JSON into a JavaScript object
    const json = await response.json();

    // Return the server's response
    return json;
  } catch (error) {
    // Handle and log any errors
    console.log(error);
  }
}
