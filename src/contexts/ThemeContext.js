import React, { useState, createContext } from 'react';


export const ThemeContext = createContext();

export const ThemeProvider = props => {
  const [theme, setTheme] = useState("react-bootstrap");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  )
}