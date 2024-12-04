import { Link } from "react-router-dom";
import logOut from "../users/LoginHelpers/logOut";
import { useState } from "react";

export default function Navigation() {
  const userKey = localStorage.getItem("current-user-key");

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <nav>
      <Link to="/">
        <span className="search-button">Search</span>
      </Link>
      <Link to="/books">All Books</Link>
      {userKey ? (
        <>
          <Link to="/account">Account</Link>
          <button onClick={(e) => logOut(e, setErrorMessage)}>Log Out</button>
          {errorMessage && <span>Error: {errorMessage}</span>}
        </>
      ) : (
        <Link to="/account">Log In/Register</Link>
      )}
    </nav>
  );
}
