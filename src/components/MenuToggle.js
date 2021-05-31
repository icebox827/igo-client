import React from 'react';
import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import { CloseIcon, MenuIcon } from '../components/Header';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
};

MenuToggle.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default MenuToggle;