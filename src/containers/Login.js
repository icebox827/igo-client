import React from 'react';
import { Formik } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

const Login = () => {
  function validateName(value) {
    let error
    if (!value) {
      error = "username and password are required"
    } 
    return error
  }
  return (
    <Formik>
      <FormControl id="form" isRequired name="name" validate={validateName}>
        <FormLabel>Username</FormLabel>
        <Input placeholder="username"/>
        <FormLabel>Password</FormLabel>
        <Input placeholder="password"/>
        <Button
          mt={4}
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </FormControl>
      
    </Formik>
  )
}

export default Login;