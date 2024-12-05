const baseURL = "http://localhost:3000/api/";

export default async function registerAPI(user) {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
