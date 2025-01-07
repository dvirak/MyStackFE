import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    password1: "",
    password2: "",
    password: "",
    first_name: "",
    last_name: "",
    preferred_name: "",
    phone: "",
    email: "",
  });

  return (
    <AppContext.Provider
      value={{
        errorMessage,
        setErrorMessage,
        isLoading,
        setIsLoading,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
