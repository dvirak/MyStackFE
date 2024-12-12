export default function validateRegisterData(userData) {
  if (!userData.username) {
    return "Username is required. This is mine";
  }
  if (userData.password1 !== userData.password2) {
    return "Passwords do not match.";
  }
  if (userData.password1.length < 8) {
    return "Password must be at least 8 characters long.";
  }
  return null;
}
