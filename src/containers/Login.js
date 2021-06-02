import { Flex, GridItem,Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/index';
import { Card } from 'react-bootstrap';
import Loader from '../components/Loader';
import Error from '../components/Error';
import '../styles/App.css';


const Login = () => {
  const dispatch = useDispatch();
  const { users, login, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser);
  },[dispatch]);

  

}

export default Login;