import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/index';
import { Card } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';
import Loader from '../components/Loader';
import Error from '../components/Error';
import '../styles/App.css';


const Login = () => {
  const dispatch = useDispatch();
  
}

export default Login;