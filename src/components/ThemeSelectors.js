import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const ThemeSelectors = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme('react-semantic')}>React-Semantic</button>
      <button onClick={() => setTheme('material-ui')}>Material-UI</button>
      <button onClick={() => setTheme('react-bootstrap')}>React-Bootstrap</button>
    </div>
  )
}

export default ThemeSelectors;