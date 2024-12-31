import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{ errorMessage, setErrorMessage, isLoading, setIsLoading }}
    >
      {children}
    </AppContext.Provider>
  );
}
