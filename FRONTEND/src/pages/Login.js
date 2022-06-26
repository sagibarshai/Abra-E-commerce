import React from 'react';
import {
  StyledMain,
  StyledMainHeader,
  StyledFirstParagraph,
  StyledErrorsMessage,
  StyledLabel,
  StyledInput,
  StyledButton,
  StyledSecondParagraph,
} from './StyledLogin';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
      .put(process.env.REACT_APP_BACKEND_URL + '/auth/login', userData)
      .then((res) => {
        if (!res.data.errorMessage) {
          const userId = res.data.message._id;
          const username = res.data.message.username;
          localStorage.setItem('userId', userId);
          localStorage.setItem('username', username);
          navigate(`/best-sellers`);
          props.setUserIsLoggedin(true);
          props.setUsername(username);
          return;
        } else {
          setErrorMessgae(res.data.errorMessage);
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <StyledMain>
        <StyledMainHeader>Login Form</StyledMainHeader>
        <StyledFirstParagraph>
          Fill out the form below to login Abra E-commerce
        </StyledFirstParagraph>
        {
          <StyledErrorsMessage>
            {renderErrorContentHandler(errorMessage)}
          </StyledErrorsMessage>
        }
        <form onSubmit={(event) => formSubmitHandler(event)}>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <br />
          <StyledInput
            className="input_email"
            type="email"
            placeholder="abra@labs.com"
            value={email}
            onChange={(event) => {
              inputHandler(event, 'email');
            }}
          />
          <br />
          <StyledLabel className="label_password" htmlFor="password">
            Password
          </StyledLabel>
          <br />
          <StyledInput
            className="input_password"
            type="password"
            placeholder="Must be at least 5 characters"
            value={password}
            onChange={(event) => {
              inputHandler(event, 'password');
            }}
          />
          <br />
          <StyledButton type="submit">Login</StyledButton>
          <StyledSecondParagraph className="second_p">
            Don't have an account?{' '}
            <Link
              to="/signup"
              style={{
                fontWeight: 600,
                color: '#ff9f00',
                textDecoration: 'underline',
              }}
            >
              sign in right now and start shop!
            </Link>
          </StyledSecondParagraph>
        </form>
      </StyledMain>
    </>
  );
};
