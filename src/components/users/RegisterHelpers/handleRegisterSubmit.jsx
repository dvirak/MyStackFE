import { registerAPI } from "../../../API/UsersAPI";

export default async function handleSubmit(
  e,
  user,
  password1,
  password2,
  setPassword,
  setErrorMessage
) {
  e.preventDefault();
  const response = await registerAPI(user);
  if (password1 === password2) {
    setPassword(password1);
  } else {
    setErrorMessage("Please ensure passwords match");
  }
  if (response.token) {
    const token = response?.token;
    localStorage.setItem("current-user-key", token);
    location.reload();
  } else {
    setErrorMessage(response?.message);
  }
}
