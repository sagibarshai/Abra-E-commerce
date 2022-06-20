import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import classes from './Signup.module.css';
import axios from 'axios';
import { renderErrorContentHandler } from '../utils/errorContentControl';
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
      <div className={classes['underline']}></div>
      <div className={classes['main-container']}>
        <main>
          <section>
            <h1 className={classes['main-header']}>Login Form</h1>
            <p className={classes['first_p']}>
              Fill out the form below to signup Abra E-commerce
            </p>
          </section>
          {
            <p className={classes['errors']}>
              {renderErrorContentHandler(renderErrorContent)}
            </p>
          }
          <section>
            <form
              onSubmit={(event) => {
                formSubmitHandler(event);
              }}
            >
              <label className={classes['label_email']} htmlFor="email">
                Username
              </label>
              <br />
              <input
                className={classes['input_email']}
                type="text"
                value={username}
                placeholder="username"
                onChange={(event) => {
                  inputHandler(event, 'username');
                }}
              />
              <br />
              <label className={classes['label_password']} htmlFor="password">
                Email
              </label>
              <br />
              <input
                className={classes['input_email']}
                placeholder="Must be at least 5 characters"
                type="email"
                value={email}
                onChange={(event) => {
                  inputHandler(event, 'email');
                }}
              />
              <br />
              <label className={classes['label_password']} htmlFor="password">
                password
              </label>
              <br />
              <input
                className={classes['input_password']}
                placeholder="Must be at least 5 characters"
                type="password"
                value={password}
                onChange={(event) => {
                  inputHandler(event, 'password');
                }}
              />
              <br />
              <button type="submit">Login</button>
              <p className={classes['second_p']}>
                Already have an account?{' '}
                <Link to="/login">take me to login!</Link>
              </p>
            </form>
          </section>
        </main>
      </div>
    </>
    // <form
    //   onSubmit={(event) => {
    //     formSubmitHandler(event);
    //   }}
    // >
    //   {renderErrorContentHandler(renderErrorContent)}
    //   <input
    //     type="text"
    //     value={username}
    //     placeholder="username"
    //     onChange={(event) => {
    //       inputHandler(event, 'username');
    //     }}
    //   />
    //   <input
    //     type="email"
    //     value={email}
    //     placeholder="Email"
    //     onChange={(event) => {
    //       inputHandler(event, 'email');
    //     }}
    //   />
    //   <input
    //     type="password"
    //     value={password}
    //     placeholder="password"
    //     onChange={(event) => {
    //       inputHandler(event, 'password');
    //     }}
    //   />
    //   <button type="submit">Submit</button>
    // </form>
  );
};
