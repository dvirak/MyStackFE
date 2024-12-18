// ! ----------------- IMPORTED FILES --------------------------
import logOut from "./LoginHelpers/logOut";
import { getUserAPI } from "../../API/UsersAPI";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useEffect, useState } from "react";
// ! -----------------------------------------------------------

/**
 * Description: Represents the Account component, which displays user-specific information
 * and handles logout functionality.
 *
 * @returns {JSX.Element} A JSX element displaying a logged-in message, a logout button, and any error messages.
 *
 * @precondition The user must be logged in and have access to the `getUserAPI` function to retrieve account data.
 * @postcondition Fetches the current user's information and displays it. Provides the ability to log out and displays any error messages if the logout fails.
 */
export default function Account() {
  // State to hold the current user's data.
  const [currentUser, setCurrentUser] = useState("");
  // State to hold any error messages.
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Function to fetch user data and update state.
    async function getUserInfo() {
      try {
        // Call the API to get the user information.
        const userInfo = await getUserAPI();
        // Update the currentUser state with the retrieved user data.
        setCurrentUser(userInfo);
      } catch (error) {
        // Log any errors that occur during the API call.
        console.log(error);
        setErrorMessage(error);
      }
    }

    // Call the function to fetch user data on component mount.
    getUserInfo();
  }, []); // Empty dependency array means this useEffect runs only once on mount.

  return (
    <>
      {/* Display a message indicating the user is logged in. */}
      <span>YOU LOGGED IN!</span>
      {/* Button to trigger logout functionality. */}
      <button onClick={(e) => logOut(e, setErrorMessage)}>LOG OUT</button>
      {/* Display any error messages if present. */}
      <h4>{errorMessage}</h4>
    </>
  );
}
