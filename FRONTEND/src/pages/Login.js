import React from 'react';
import classes from './Login.module.css';
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
      .put('http://localhost:5500/api/auth/login', userData)
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
      <div className={classes['underline']}></div>
      <div className={classes['main-container']}>
        <main>
          <section>
            <h1 className={classes['main-header']}>Login Form</h1>
            <p className={classes['first_p']}>
              Fill out the form below to login Abra E-commerce
            </p>
          </section>
          {
            <p className={classes['errors']}>
              {renderErrorContentHandler(errorMessage)}
            </p>
          }
          <section>
            <form onSubmit={(event) => formSubmitHandler(event)}>
              <label className={classes['label_email']} htmlFor="email">
                Email
              </label>
              <br />
              <input
                className={classes['input_email']}
                type="email"
                placeholder="abra@labs.com"
                value={email}
                onChange={(event) => {
                  inputHandler(event, 'email');
                }}
              />
              <br />
              <label className={classes['label_password']} htmlFor="password">
                Password
              </label>
              <br />
              <input
                className={classes['input_password']}
                type="password"
                placeholder="Must be at least 5 characters"
                value={password}
                onChange={(event) => {
                  inputHandler(event, 'password');
                }}
              />
              <br />
              <button type="submit">Login</button>
              <p className={classes['second_p']}>
                Don't have an account?{' '}
                <Link to="/signup">sign in right now and start shop!</Link>
              </p>
            </form>
          </section>
        </main>
      </div>
    </>
  );
  {
    /* // <form onSubmit={(event) => formSubmitHandler(event)}>
    //   {renderErrorContentHandler(errorMessage)} */
  }
  //   <input
  //     type="email"
  //     value={email}
  //     placeholder="enter your email"
  //     onChange={(event) => {
  //       inputHandler(event, 'email');
  //     }}
  //   />
  //   <input
  //     type="password"
  //     value={password}
  //     placeholder="enter your password"
  //     onChange={(event) => {
  //       inputHandler(event, 'password');
  //     }}
  //   />
  //   <button type="submit">Login</button>
  // </form>
};
