import { useContext } from "react";
import { AppContext } from "../context/AppContextProvider";

export default function Errors() {
  const { errorMessage, isLoading } = useContext(AppContext);

  return (
    <div>
      {errorMessage ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : (
        isLoading && <p>Loading...</p>
      )}
      {/* {isLoading ? <p>Loading...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
    </div>
  );
}
