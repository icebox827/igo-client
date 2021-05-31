import { Box, Grid, Menu, MenuItem, Text, Flex, Spacer, Heading, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const NavBar = () => {
  return (
    <Flex>
      <Menu>
        <Box p="2">
          <Heading size="md">
            <img src={Logo} alt="logo" className="logo" />
          </Heading>
        </Box>
        <Box>
          <MenuItem color="white" className="link" bg="blue">
             <Link to="/">
               <Text display="block">
                  Home
              </Text>
             </Link>
          </MenuItem>
        </Box>
        <Box>
          <MenuItem color="white" className="link" bg="blue">
            <Link to="/car">
                <Text display="block">
                  Car
                </Text>
            </Link>
          </MenuItem>
        </Box>
        <Box>
          <MenuItem color="white" className="link" bg="blue">
           <Link to="/reservation">
             <Text display="block">
                Reservation
              </Text>
            </Link>
          </MenuItem>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="teal" mr="4">
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button colorScheme="teal">
          <Link to="/login">Log in</Link>
          </Button>
        </Box>
      </Menu>
    </Flex>
    // <Menu className="navbar">
    //   <Grid templateColumns="repeat(5, 1fr)">
    //     <Box>
    //       <MenuItem color="white" className="link" bg="blue">
    //         <Link to="/">
    //           <Text display="block">
    //             Home
    //           </Text>
    //         </Link>
    //       </MenuItem>
    //     </Box>
    //     <Box>
    //     <MenuItem color="white" className="link" bg="blue">
    //       <Link to="/car">
    //         <Text display="block">
    //           Car
    //         </Text>
    //       </Link>
    //     </MenuItem>
    //     </Box>
    //     <Box>
    //       <MenuItem color="white" className="link" bg="blue">
    //         <Link to="/reservation">
    //           <Text display="block">
    //             Reservation
    //           </Text>
    //         </Link>
    //       </MenuItem>
    //     </Box>
    //     <Box>
    //       <MenuItem color="white" className="link" bg="blue">
    //         <Link to="/reservation">
    //           <Text display="block">
    //             Signin
    //           </Text>
    //         </Link>

    //         <Link to="/reservation">
    //           <Text display="block">
    //             Signup
    //           </Text>
    //         </Link>
    //       </MenuItem>
    //     </Box>
    //     <Box>
    //       <MenuItem color="white" className="link" bg="blue">
    //         <Link to="/reservation">
    //           <Text display="block">
    //             Signup
    //           </Text>
    //         </Link>
    //       </MenuItem>
    //     </Box>
    //   </Grid>
    // </Menu>
  )
};

export default NavBar;