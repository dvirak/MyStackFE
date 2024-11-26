import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Books from "./Pages/Books";
import AccountPage from "./Pages/AccountPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/account" element={<AccountPage />} />
          {/* <Route path="/" element={<Homepage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
