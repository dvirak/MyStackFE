const baseURL = "http://localhost:3000/api/";
const currentUserToken = localStorage.getItem("current-user-key");
const userID = localStorage.getItem("user-id");

export default async function getUserAPI() {
  try {
    const response = await fetch(`${baseURL}/users/user/${userID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUserToken}`,
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
