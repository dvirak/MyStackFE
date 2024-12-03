export default function InputField({ name }) {
  return (
    <label>
      Email:
      <input
        type="username"
        id="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
    </label>
  );
}
