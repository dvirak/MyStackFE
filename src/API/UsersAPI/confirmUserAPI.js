export default async function confirmUserAPI(username, password) {
  if (username === "testuser" && password === "password123") {
    return true;
  }
  return false;
}
