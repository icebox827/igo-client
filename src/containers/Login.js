import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { signin } from '../actions/index';
import { Button, FormGroup, FormControl, FormLabel, Form } from 'react-bootstrap';
import { Text } from '@chakra-ui/react';
import '../styles/App.css';


const Login = () => {
  const history = useHistory();

  const [credits, setCredits] = useState({
     username: '',
     password: ''
    });

  const [failure, setFailure] = useState();

  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (user) {
    history.push('/');
  };

  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.username]: e.target.value });
  };

  const handleClick = () => {
    const btn = document.getElementById('login');
    btn.disabled = true;
    btn.style.backgroundColor = '#4caf50';
    btn.value = 'Wait...';
    btn.textContent = 'Wait...';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFailure('');
    handleClick();
    const response = await signin(credits);
    if (response && response.failure) return setFailure(response.failure);
    setFailure('');
    sessionStorage.setItem('current_user', JSON.stringify(response));
    return history.push('/');
  };

  
  if (failure) {
    const btn = document.getElementById('login');
    btn.disabled = false;
    btn.style.backgroundColor = '#41b5e8';
  };

  return (
    <div className="flex-col">
      <h1 className="v-bold">Login</h1>
      <br />
      {failure && <span className="alert-bad">{failure}</span>}
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit} className="signup flex-col">
        <input
          onChange={handleChange}
          type="text"
          className="username"
          name="username"
          placeholder="username"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          className="password"
          name="password"
          placeholder="*******"
          required
        />

        <input
          type="submit"
          id="login"
          className="login active"
          value="LOGIN"
        />
      </form>
    </div>
  )
}

export default Login;