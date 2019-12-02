import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

const Test2 = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <p>
      { theme }
    </p>
  )
}


export default Test2;