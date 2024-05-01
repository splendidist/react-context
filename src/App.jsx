import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UserPage } from "./pages/UserPage";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <h1>React useContext App</h1>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
          <Link to="/users/splendidist">User Page</Link> |{" "}
          <Link to="*">All other pages</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/users/:username" element={<UserPage />} />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
