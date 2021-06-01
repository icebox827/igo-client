import React from 'react';
import { useState, useEffect, Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Text } from '@chakra-ui/react';

const Login = (props) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateFileds = () => {
    return userName.lenght > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <Text 
        fontSize="4xl" 
        color="blue.500" 
        mt="4" 
        textAlign="center" 
        fontWeight="bold"
      > 
        Log in 
      </Text>
      {/* <FormGroup controleId="username" bsSize="large">
        <ControlLabel>username</ControlLabel>
        <FormControl
          autoFocus
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </FormGroup> */}

    </div>
  )
}

export default Login;