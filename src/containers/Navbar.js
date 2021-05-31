import React from 'react';
import { useState } from 'react';

import Logo from './Logo';
import MenuToggle from '../components/MenuToggle';
import MenuLinks from '../components/MenuLinks';
import NavBarContainer from '../components/NavBarContainer';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        w="100px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  );
};

export default NavBar;