import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  let { theme, setTheme } = useContext(ThemeContext);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <h2>Userpage</h2>
      <h3>User ID: {username}</h3>
      <button onClick={() => setUsername("Misty")}>
        Change username to Misty
      </button>
      <h2>Theme: {theme}</h2>
      <button onClick={handleThemeToggle}>Change theme to dark</button>
    </div>
  );
}
