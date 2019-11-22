import React, { useContext } from 'react';
import {CountContext} from '../contexts/CountContext'

const Test2 = (props) => {
  const [count, setCount] = useContext(CountContext);

  return (
    <p>
      {count}
    </p>
  )
}


export default Test2;