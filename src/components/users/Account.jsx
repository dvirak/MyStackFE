import { useEffect, useState } from "react";
import logOut from "./LoginHelpers/logOut";
import { getUserAPI } from "../../API/UsersAPI";

export default function Account() {
  const [currentUser, setCurrentUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function getUserInfo() {
      try {
        const userInfo = await getUserAPI();
        console.log("WORKED?");
        console.log(userInfo);
        setCurrentUser(userInfo);
        console.log(currentUser.id);
      } catch (error) {
        console.log(error);
      }
    }
    getUserInfo();
  }, []);

  return (
    <>
      <span>YOU LOGGED IN!</span>
      <button onClick={(e) => logOut(e, setErrorMessage)}>LOG OUT</button>
      <h4>{errorMessage}</h4>
    </>
  );
}
