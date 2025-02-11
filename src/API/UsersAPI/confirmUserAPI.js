// ! ----------------- IMPORTED FILES --------------------------
import { baseURL } from "../dataAPI";
// ! -----------------------------------------------------------

export default async function confirmUserAPI(username, password) {
  const userID = localStorage.getItem("user-id");
  const currentUserToken = localStorage.getItem("current-user-key");

  try {
    const response = await fetch(`${baseURL}/users/${userID}/confirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUserToken}`,
      },
      body: { username, password },
    });

    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  }
}
