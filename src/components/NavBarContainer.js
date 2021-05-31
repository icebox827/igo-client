import React from 'react'
import { Link, Box, Flex, Text, Button, Stack } from '@chakra-ui/react'
import PropTypes from 'prop-types';

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      w='100%'
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  )
};

NavBarContainer.propTypes = {
  children: PropTypes.func,
}

export default NavBarContainer;
