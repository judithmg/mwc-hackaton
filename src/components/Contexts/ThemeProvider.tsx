import React, { useState, createContext } from "react";

type Theme = boolean;
type ThemeContextT = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContextT>({} as ThemeContextT);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  const backgroundColor = theme ? "#333" : "#e5e5e5";
  const color = theme ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
