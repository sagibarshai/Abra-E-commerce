import React from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { renderErrorContentHandler } from '../utils/errorContentControl';
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
export default () => {
  const navigate = useNavigate();
  const [renderErrorContent, setRenderErrorContent] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (username === '' || password === '' || email === '') {
      setRenderErrorContent(<div>Please fill all inputs</div>);
    }
    const userData = { username, password, email, isloggedIn: false };
    axios
      .post('http://localhost:5500/api/auth/signup', userData)
      .then((res) => {
        if (res.data.errorMessage) {
          setRenderErrorContent(res.data.errorMessage);
        } else {
          setRenderErrorContent(`hello ${res.data.createdUser.username}!
          We just created your user.
          Welcome!`);
          setEmail('');
          setPassword('');
          setUsername('');
        }
      })
      .catch((err) => {
        console.log(err + ' err');
        setRenderErrorContent(
          'an error occured on the server, please try again later'
        );
      });
  };
  const inputHandler = (event, inputType) => {
    if (inputType === 'username') {
      setUsername(event.target.value);
    } else if (inputType === 'password') {
      setPassword(event.target.value);
    } else if (inputType === 'email') {
      setEmail(event.target.value);
    }
  };

  return (
    <>
      <StyledMain>
        <StyledMainHeader>Login Form</StyledMainHeader>
        <StyledFirstParagraph>
          Fill out the form below to signup Abra E-commerce
        </StyledFirstParagraph>

        {
          <StyledErrorsMessage>
            {renderErrorContentHandler(renderErrorContent)}
          </StyledErrorsMessage>
        }

        <form
          onSubmit={(event) => {
            formSubmitHandler(event);
          }}
        >
          <StyledLabel htmlFor="username">Username</StyledLabel>
          <br />
          <StyledInput
            id="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(event) => {
              inputHandler(event, 'username');
            }}
          />
          <br />
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <br />
          <StyledInput
            id="email"
            placeholder="Abra@labs.com"
            type="email"
            value={email}
            onChange={(event) => {
              inputHandler(event, 'email');
            }}
          />
          <br />
          <StyledLabel htmlFor="password">password</StyledLabel>
          <br />
          <StyledInput
            id="password"
            placeholder="Must be at least 5 characters"
            type="password"
            value={password}
            onChange={(event) => {
              inputHandler(event, 'password');
            }}
          />
          <br />
          <StyledButton type="submit">Login</StyledButton>
          <StyledSecondParagraph>
            Already have an account?{' '}
            <Link
              to="/login"
              style={{
                fontWeight: 600,
                color: '#ff9f00',
                textDecoration: 'underline',
              }}
            >
              take me to login!
            </Link>
          </StyledSecondParagraph>
        </form>
      </StyledMain>
    </>
  );
};
