import { useState } from "react";

export default function Account() {
  function logOut(e) {
    e.preventDefault();
    if (localStorage.getItem("current-user-key")) {
      localStorage.setItem("current-user-key", "");
      location.reload();
    } else {
      setErrorMessage("You are not logged in");
    }
  }

  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <span>YOU LOGGED IN!</span>
      <button onClick={(e) => logOut(e)}>LOG OUT</button>
      <h4>{errorMessage}</h4>
    </>
  );
}
