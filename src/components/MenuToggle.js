/* eslint-disable react/jsx-no-undef */
import React from "react"
import { Box, Menu } from "@chakra-ui/react"
import PropTypes from 'prop-types';

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  )
};

MenuToggle.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.func,
}

export default MenuToggle;