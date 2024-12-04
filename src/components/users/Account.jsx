import { useState } from "react";
import logOut from "./LoginHelpers/logOut";

export default function Account() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <span>YOU LOGGED IN!</span>
      <button onClick={(e) => logOut(e, setErrorMessage)}>LOG OUT</button>
      <h4>{errorMessage}</h4>
    </>
  );
}
