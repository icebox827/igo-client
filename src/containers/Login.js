import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../styles/App.css';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://igo-api.herokuapp.com/api/v1/authentication',
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify(user),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          sessionStorage.setItem('userToken', JSON.stringify(data.token));
          sessionStorage.setItem('username', JSON.stringify(user.username));
          sessionStorage.setItem('admin', JSON.stringify(data.admin));
          history.push('/');
        }

        if (data.error) {
          setError(data.error);
        }
      });
  };

  const renderUser = () => (
    <>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label className="label">Username :</label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Please enter your username"
          className="username"
          name="username"
          minLength="3"
          required
        />
        <br />
        <label className="label">Password :</label>
        <input
          onChange={handleChange}
          type="password"
          placeholder="Please enter your password"
          className="password"
          name="password"
          minLength="6"
          required
        />
        <button type="submit" className="btnLogin">Login</button>
      </form>
    </>
  );

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      <Text fontSize="3xl" color="blue.500" mt="4" textAlign="center" fontWeight="bold">Login</Text>
      {renderUser()}
    </Flex>
  );
};

export default Login;
