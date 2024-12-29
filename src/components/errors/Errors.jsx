import { useContext } from "react";
import { AppContext } from "../../AppContext";

export default function Errors() {
  const { errorMessage, isLoading } = useContext(AppContext);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
}
