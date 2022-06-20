import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { renderErrorContentHandler } from '../utils/errorContentControl';
import axios from 'axios';
export default (props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessgae] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputHandler = (event, inputType) => {
    if (inputType === 'email') {
      setEmail(event.target.value);
    } else if (inputType === 'password') {
      setPassword(event.target.value);
    }
  };
  const formSubmitHandler = async (event) => {
    const userData = { email, password, isloggedIn: false };
    event.preventDefault();
    if (email === '' || password === '') {
      setErrorMessgae('invalid input');
    }
    axios
      .put('http://localhost:5500/api/auth/login', userData)
      .then((res) => {
        if (!res.data.errorMessage) {
          navigate('/best-sellers');
          props.setUserIsLoggedin(res.data.message);

          return;
        } else {
          setErrorMessgae(res.data.errorMessage);
        }
      })
      .catch((error) => console.log(error));
  };
  console.log(props.userIsLoggedin);
  return (
    <form onSubmit={(event) => formSubmitHandler(event)}>
      {renderErrorContentHandler(errorMessage)}
      <input
        type="email"
        value={email}
        placeholder="enter your email"
        onChange={(event) => {
          inputHandler(event, 'email');
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="enter your password"
        onChange={(event) => {
          inputHandler(event, 'password');
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
};
