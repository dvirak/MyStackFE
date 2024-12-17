export default function handleInputChange(e, setUserData) {
  const { name, value } = e.target;
  setUserData((prev) => ({ ...prev, [name]: value }));
}
