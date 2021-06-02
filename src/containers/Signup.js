import { Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import '../styles/App.css';

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState();
  const [error, setError] = useState();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('https://igo-api.herokuapp.com/api/v1/users', 
      {
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify(user)
      }
    )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if (data.message) {
        history.push('/login')
      }

      if (data.error) {
        setError(data.error)
      }
    });
  };

  const renderUser = () => {

    return (
      <>
      {error && error.map(err => <p key={err}>{err}</p>) }

      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          onChange={handleChange} 
          type="text" 
          placeholder="Please enter your username"
          className="username"
          name="username"
          minLength="3"
          required
        />
        <label>email</label>
        <input
          onChange={handleChange} 
          type="text" 
          placeholder="Please enter your email"
          className="email"
          name="email"
          minLength="3"
          required
        />
        <label>Password</label>
        <input 
          onChange={handleChange}
          type="password" 
          placeholder="Please enter your password"
          className="password"
          name="password"
          minLength="6"
          required 
        />
        <button type="submit">Signup</button>
      </form>
      </>
    )
  };

  return (
    <Flex wrap="wrap" display="flex" w="100%">
      <Text fontSize="3xl" color="blue.500" mt="4" textAlign="center" fontWeight="bold">Signup</Text>
      {renderUser()}
    </Flex>
  )
}

export default Signup;