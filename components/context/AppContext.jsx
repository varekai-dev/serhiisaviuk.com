import { createContext, useState } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const store = {
    theme,
    setTheme,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppProvider;
