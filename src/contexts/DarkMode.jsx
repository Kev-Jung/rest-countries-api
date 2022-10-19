import { createContext, useState } from "react";

export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const themeState = {
    light: {
      bg: "hsl(0, 0%, 98%)",
      text: "hsl(200, 15%, 8%)",
      elements: "hsl(0, 0%, 100%)",
      inputColor: "hsl(0, 0%, 52%)",
      shadow: "0 1px 3px 3px rgba(0, 0, 0, 0.05)",
    },
    dark: {
      bg: "hsl(207, 26%, 17%)",
      text: "hsl(0, 0%, 100%)",
      elements: "hsl(209, 23%, 22%)",
    },
  };

  const value = { darkMode, toggleDarkMode, ...themeState };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};
