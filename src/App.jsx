// ! ----------------- IMPORTED FILES --------------------------
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Books from "./Pages/Books";
import AccountPage from "./Pages/AccountPage";
// ! -----------------------------------------------------------

// ! ----------------- IMPORTED MODULES --------------------------
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
    <>
      <BrowserRouter>
        {/* Renders the header section of the page */}
        <Header />

        {/* Renders the navigation bar */}
        <Navigation />

        {/* Defines the routes for different pages */}
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/account" element={<AccountPage />} />
          {/* Uncomment the following line to enable the Homepage route */}
          {/* <Route path="/" element={<Homepage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
