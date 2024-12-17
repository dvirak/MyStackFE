export default function capitalizeWords(str) {
  if (str === "password1") return "Password";
  if (str === "password2") return "Confirm Password";

  return str
    .replace(/_/g, " ") // Replace underscores with spaces
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
