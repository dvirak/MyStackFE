// ! ----------------- IMPORTED FILES --------------------------
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Books from "./Pages/Books";
import AccountPage from "./Pages/AccountPage";
// ! -----------------------------------------------------------

// ! ----------------- IMPORTED MODULES --------------------------
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppContextProvider from "./context/AppContextProvider";
import MainLayout from "./Pages/PageLayout";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
// ! -----------------------------------------------------------

/**
 * Description: The main App component that sets up the routing for the application.
 * It renders the `Header`, `Navigation`, and includes routes for `Books` and `AccountPage`.
 *
 * @returns {JSX.Element} The rendered app component with routing and page structure.
 *
 * @precondition The routes defined in the `Routes` component must correctly point to the available pages (`Books` and `AccountPage`).
 * @postcondition The app will render the corresponding components based on the route selected.
 */
function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        {/* Defines the routes for different pages */}
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/account" element={<AccountPage />} />
            {/* Uncomment the following line to enable the Homepage route */}
            {/* <Route path="/" element={<Homepage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
