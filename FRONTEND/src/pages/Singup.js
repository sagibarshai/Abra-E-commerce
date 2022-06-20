import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { renderErrorContentHandler } from '../utils/errorContentControl';
export default () => {
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
    <form
      onSubmit={(event) => {
        formSubmitHandler(event);
      }}
    >
      {renderErrorContentHandler(renderErrorContent)}
      <input
        type="text"
        value={username}
        placeholder="username"
        onChange={(event) => {
          inputHandler(event, 'username');
        }}
      />
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(event) => {
          inputHandler(event, 'email');
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="password"
        onChange={(event) => {
          inputHandler(event, 'password');
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
