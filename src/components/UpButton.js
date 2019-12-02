import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const UpButton = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <button onClick={() => setTheme("react-semantic")}>{theme}</button>
  )
}

export default UpButton;