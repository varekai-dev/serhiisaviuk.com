import React, { useContext } from "react";
import { AppContext } from "./context/AppContext";

function ThemeSwitch({ text }) {
  const { theme, setTheme } = useContext(AppContext);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <a className="theme-switcher" onClick={handleClick}>
      {text}
    </a>
  );
}

export default ThemeSwitch;
