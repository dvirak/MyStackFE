// ! ----------------- IMPORTED FILES --------------------------
import { baseURL } from "../dataAPI";
// ! -----------------------------------------------------------

/**
 * Description: Sends a registration request to the backend API to create a new user account with the provided user details.
 *
 * @param {Object} user - An object containing the user's registration details.
 *                        Typically includes `username` (string), `password` (string),
 *                        and any additional required fields like `email` or `name`.
 * @returns {Promise<Object>} Resolves with the server's response as a JSON object if the request is successful. Logs and returns `undefined` in case of an error.
 * @throws {Error} Logs any error that occurs during the API request or while parsing the response.
 *
 * @precondition The backend server must be running and accessible at the specified `baseURL`.
 *               The `user` object must contain valid registration details as required by the API.
 * @postcondition A new user account is created in the backend, and the server's response is returned.
 */

export default async function registerAPI(user) {
  try {
    // Send a POST request to the `/users/register` endpoint with user details in the body
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
