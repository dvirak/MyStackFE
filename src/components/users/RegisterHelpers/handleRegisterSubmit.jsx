import { registerAPI } from "../../../API/UsersAPI";

export default async function handleSubmit(
  e,
  user,
  passwords,
  setPassword,
  setErrorMessage
) {
  e.preventDefault();

  if (passwords.password1 === passwords.password2) {
    setPassword(passwords.password1);
  } else {
    setErrorMessage("Please ensure passwords match");
    return;
  }

  const response = await registerAPI(user);

  if (response.token) {
    const token = response?.token;
    localStorage.setItem("current-user-key", token);
    location.reload();
  } else {
    setErrorMessage(response?.message);
  }
}
