import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { signup } from '../actions/index';

const Signup = () => {
  const history = useHistory();
  const [credits, setCredits] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [success, setSuccess] = useState();
  const [failure, setFailure] = useState();
  const user = JSON.parse(sessionStorage.getItem('current_user'));
  if (user) {
    history.push('/');
  }
  const handleClick = () => {
    const btn = document.getElementById('signup');
    btn.disabled = true;
    btn.style.backgroundColor = '#4caf50';
    btn.value = 'Wait...';
  };
  const handleChange = (e) => {
    setCredits({ ...credits, [e.target.username]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFailure();
    setSuccess();
    handleClick();
    const response = await signup(credits);
    setSuccess(response.message);
    if (!response.message) {
      setFailure(response);
    }
  };

  if (failure) {
    const btn = document.getElementById('signup');
    btn.disabled = false;
    btn.style.backgroundColor = '#41b5e8';
  }
  return (
    <>
      <br />
      <h1 className="text-center ">SignUp</h1>

      <div className="flex-col center">
        {success && (
          <span className="alert-good">
            {success}
            {' '}
            <Link to="/login">Click here to login.</Link>
          </span>
        )}
        {failure
          && failure.map((fail) => <span key={fail} className="alert-bad">{fail}</span>)}
      </div>
      <br />
      <form onSubmit={handleSubmit} className="flex-col">
        <input
          onChange={handleChange}
          type="text"
          className="username"
          name="username"
          placeholder="username"
          minLength="3"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          className="emaul"
          name="email"
          placeholder="email"
          minLength="3"
          required
        />
        <input
          onChange={handleChange}
          type="password"
          className="password"
          name="password"
          minLength="6"
          placeholder="Password"
          required
        />
        <input
          type="submit"
          id="signup"
          className="submit btn active login"
          value="SIGN UP"
        />
      </form>
    </>
  )
}

export default Signup;