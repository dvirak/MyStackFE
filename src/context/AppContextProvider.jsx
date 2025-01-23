import { createContext, useState } from "react";

export const AppContext = createContext();

export const initialUserState = {
  username: "",
  password1: "",
  password2: "",
  password: "",
  first_name: "",
  last_name: "",
  preferred_name: "",
  phone: "",
  email: "",
};

export default function AppContextProvider({ children }) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [userData, setUserData] = useState(initialUserState);

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
