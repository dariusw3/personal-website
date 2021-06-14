import React, { useState, createContext } from "react";

export const ColorThemeContext = createContext({});

export const ColorThemeContextProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState("light");

  return (
    <ColorThemeContext.Provider
      value={{
        colorTheme,
        setColorTheme,
      }}
    >
      {children}
    </ColorThemeContext.Provider>
  );
};
