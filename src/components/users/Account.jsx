// ! ----------------- IMPORTED FILES --------------------------
import logOut from "./LoginHelpers/logOut";
import { getUserAPI } from "../../API/UsersAPI";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContextProvider";
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
  // use context to load state
  const { setErrorMessage, setIsLoading, userData, setUserData } =
    useContext(AppContext);

  useEffect(() => {
    // check if user exists in context, load it
    // check if user_key exists in local storage, get user data, set user data
    // Function to fetch user data and update state.
    async function getUserInfo() {
      setErrorMessage("");
      setIsLoading(true);
      if (!userData.username) {
        try {
          // Call the API to get the user information.
          const userInfo = await getUserAPI();
          // Update the currentUser state with the retrieved user data.
          setUserData(userInfo);
        } catch (error) {
          // Log any errors that occur during the API call.
          console.log(error);
          setErrorMessage(error);
        }
      }
      setIsLoading(false);
    }

    // Call the function to fetch user data on component mount.
    getUserInfo();
  }, []); // Empty dependency array means this useEffect runs only once on mount.

  console.log("USER DATA:");
  console.log(userData);
  return (
    <>
      {/* Display a message indicating the user is logged in. */}
      <span>YOU LOGGED IN!</span>
      {/* Button to trigger logout functionality. */}
      <button onClick={(e) => logOut(e, setErrorMessage)}>LOG OUT</button>
      {/* Display any error messages if present. */}
    </>
  );
}
