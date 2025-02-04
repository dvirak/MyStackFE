// ! ----------------- IMPORTED FILES --------------------------
import { baseURL } from "../dataAPI";
// ! -----------------------------------------------------------

export default async function updateUserAPI(editedUserData) {
  console.log("Updating user info...");

  const currentUserToken = localStorage.getItem("current-user-key");
  const userID = localStorage.getItem("user-id");

  try {
    // Send a GET request to the `/users/user/:userID` endpoint with authorization headers
    const response = await fetch(`${baseURL}/users/${userID}/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUserToken}`,
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify(editedUserData),
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
