import React from 'react';
import { useState, useEffect, Component } from 'react';
import { Button, FormGroup, FormControl, FormLabel, Form } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateFields = () => {
    return username.lenght > 0 && password.length > 0;
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
      <Form onSubmit={handleSubmit}>
        <FormGroup controleId="username" bsSize="large">
          <FormLabel>username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <FormLabel>Passowrd</FormLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disable={!validateFields()} type="submit" >Login</Button>
      </Form>
    </div>
  )
}

export default Login;