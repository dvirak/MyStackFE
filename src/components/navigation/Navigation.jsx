// ! ----------------- IMPORTED FILES --------------------------
import logOut from "../users/LoginHelpers/logOut";
// ! -----------------------------------------------------------

// ! ---------------- IMPORTED MODULES -------------------------
import { Link } from "react-router-dom";
import { useState } from "react";
// ! -----------------------------------------------------------

/**
 * Description: A navigation bar component that provides links to various pages
 * in the application. Displays conditional links and buttons based on the
 * user's login status and handles user logout functionality.
 *
 * @returns {JSX.Element} A JSX element representing the navigation bar, including links, buttons, and error messages if applicable.
 *
 * @precondition The local storage must contain a valid `current-user-key` to determine user login status.
 * @postcondition Renders navigation links and logout functionality based on user status. Displays an error message if logout fails.
 */

export default function Navigation() {
  // Retrieve the current user key from local storage
  const userKey = localStorage.getItem("current-user-key");

  // State for error messages during logout
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <nav>
      {/* Link to the Search page */}
      <Link to="/">
        <span className="search-button">Search</span>
      </Link>

      {/* Link to the All Books page */}
      <Link to="/books">All Books</Link>

      {userKey ? (
        <>
          {/* If the user is logged in, show Account link and Logout button */}
          <Link to="/account">Account</Link>
          <button onClick={(e) => logOut(e, setErrorMessage)}>Log Out</button>

          {/* Display an error message if logout fails */}
          {errorMessage && <span>Error: {errorMessage}</span>}
        </>
      ) : (
        // If the user is not logged in, show Log In/Register link
        <Link to="/account">Log In/Register</Link>
      )}
    </nav>
  );
}
