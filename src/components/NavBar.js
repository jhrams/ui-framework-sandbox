import React, { useContext } from 'react';

import BootstrapNavbar from './BootstrapNavBar';
import SemanticNavBar from './SemanticNavBar';

import { ThemeContext } from '../contexts/ThemeContext';

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      { theme === 'react-semantic' && <SemanticNavBar /> }
      { theme === 'react-bootstrap' && <BootstrapNavbar /> }
    </div>
  )
};

export default NavBar;