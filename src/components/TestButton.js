import React, { useContext } from 'react';

import { Button as SButton } from 'semantic-ui-react';
import { Button as MButton } from '@material-ui/core';
import { Button as BButton } from 'react-bootstrap';

import { ThemeContext } from '../contexts/ThemeContext';


const TestButton = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      { theme === 'react-semantic' && <SButton primary>Primary</SButton> }
      { theme === 'material-ui' && <MButton variant="contained" color="primary">Primary</MButton> }
      { theme === 'react-bootstrap' && <BButton variant="primary">Primary</BButton> }
    </div>
  )
}

export default TestButton;