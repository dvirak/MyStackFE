export default function determineType(field) {
  if (field === "phone") return "tel";
  if (field === "email") return "email";
  if (field.startsWith("password")) return "password";
  return "text";
}
