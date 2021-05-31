import React from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import MenuItem from '../components/MenuItem';

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align='center'
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to='/'>Home</MenuItem>
        <MenuItem to='/cars'>Cars </MenuItem>
        <MenuItem to='/reservation'>Reservation </MenuItem>
        <MenuItem to='/signin'>Signin </MenuItem>
        <MenuItem to='/signup' isLast>
          <Button
            size='sm'
            rounded='md'
            color={['primary.500', 'primary.500', 'white', 'white']}
            bg={['white', 'white', 'primary.500', 'primary.500']}
            _hover={{
              bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600']
            }}
          >
            Signup
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  )
};

MenuLinks.propTypes = {
  isOpen: PropTypes.func,
};

export default MenuLinks;
