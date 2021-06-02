import { Flex, GridItem,Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/index';
import Loader from '../components/Loader';
import Error from '../components/Error';
import '../styles/App.css';
import { 
  FormControl, 
  FormLabel,
  FormErrorMessage, 
  FormHelperText, 
  Input,
  Button, 
} from '@chakra-ui/react';
import { Formik } from 'formik';


const Login = () => {
  const dispatch = useDispatch();
  const { users, login, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser);
  },[dispatch]);

  const renderUser = () => {
    if (loading) {
      return (
        <GridItem colSpan={4}>
          <Loader />
        </GridItem>
      );
    }
    if (error) {
      return (
        <GridItem colSpan={4}>
          <Error />
        </GridItem>
      );
    }

    return (
      <Formik>
        <FormControl id="username">
        <FormLabel>Username</FormLabel>
        <Input type="text" placeholder="Please enter your username" />
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Please enter your password" />
        <FormHelperText>We will never share your data.</FormHelperText>
        <Button colorScheme="teal" variant="solid">Login</Button>
        </FormControl>
      </Formik>
    )
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      {renderUser()}
    </Flex>
  )
}

export default Login;