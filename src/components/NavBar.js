import React from 'react';
import BootstrapNavbar from './BootstrapNavBar';
import SemanticNavBar from './SemanticNavBar';

const NavBar = ({ theme }) => {
  return (
    <div>
      { theme === 'react-semantic' && <SemanticNavBar /> }
      { theme === 'react-bootstrap' && <BootstrapNavbar /> }
    </div>
  )
};

export default NavBar;