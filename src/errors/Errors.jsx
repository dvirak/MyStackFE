import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContextProvider";

export default function Errors() {
  const { errorMessage, isLoading } = useContext(AppContext);

  useEffect(() => {
    console.log("isLoading updated: " + isLoading);
  }, [isLoading]);

  useEffect(() => {
    console.log("errorMessage updated: " + errorMessage);
    console.log(errorMessage);
  }, [errorMessage]);

  return (
    <div>
      {typeof errorMessage === "string" && errorMessage.trim() !== "" ? (
        <p style={{ color: "red" }}>{errorMessage}</p>
      ) : (
        isLoading && <p>Loading...</p>
      )}
      {/* {isLoading && <p>Loading...</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} */}
    </div>
  );
}
