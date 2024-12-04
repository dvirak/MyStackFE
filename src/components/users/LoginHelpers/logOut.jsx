export default function logOut(e, setErrorMessage) {
  e.preventDefault();
  if (localStorage.getItem("current-user-key")) {
    localStorage.setItem("current-user-key", "");
    location.reload();
  } else {
    setErrorMessage("You are not logged in");
  }
}
