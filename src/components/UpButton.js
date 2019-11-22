import React, { useContext } from 'react';
import {CountContext} from '../contexts/CountContext'

const UpButton = () => {
  const [count, setCount] = useContext(CountContext);

  return (
    <button onClick={() => setCount(count + 1)}>click meeee</button>
  )
}

export default UpButton;