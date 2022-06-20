import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledNav,
  StyledLink,
  StyledLogo,
  StyledUserLogo,
  StyledButton,
} from './style/StyledHeader';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import userIcon from '../../svg/userIcon.png';
const NAV_LINKS = [
  {
    text: 'Best Sellers',
    to: '/best-sellers',
  },
  {
    text: 'Clothing',
    to: '/clothing',
  },
  {
    text: 'Home',
    to: '/home',
  },
  {
    text: 'Office',
    to: '/office',
  },
  {
    text: 'Sports',
    to: '/sports',
  },
];
const NAV_AUTH_LINKS = [
  {
    render: true,
    text: 'Login',
    to: '/login',
  },
  {
    render: true,
    text: 'Singup',
    to: '/signup',
  },
  {
    render: false,
    text: 'Logout',
    to: '/logout',
  },
];
export default (props) => {
  const authHandler = () => {
    console.log('auth');
  };
  return (
    <StyledHeader>
      <Link to="/home">
        <StyledLogo>
          <Logo />
        </StyledLogo>
      </Link>
      <StyledNav>
        {NAV_LINKS.map((link, index) => {
          return (
            <StyledLink key={index}>
              <NavLink
                to={link.to}
                style={({ isActive }) => {
                  return {
                    borderBottom: isActive ? '1px solid white' : 'none',
                    textDecoration: 'none',
                    paddingBottom: '18px',
                    color: 'white',
                  };
                }}
              >
                {link.text}
              </NavLink>
            </StyledLink>
          );
        })}
      </StyledNav>
      {props.userIsLoggedin && (
        <>
          <span>Hello {'username'}</span>
          <StyledButton onClick={authHandler}>
            <StyledUserLogo src={userIcon} />
          </StyledButton>
          <StyledLink>
            <NavLink
              onClick={props.logoutHandler}
              to="/logout"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '1px solid white' : 'none',
                  textDecoration: 'none',
                  paddingBottom: '18px',
                  color: 'white',
                  marginRight: '20px',
                };
              }}
            >
              logout
            </NavLink>
          </StyledLink>
        </>
      )}
      {!props.userIsLoggedin && (
        <>
          <StyledLink>
            <NavLink
              to="/signup"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '1px solid white' : 'none',
                  textDecoration: 'none',
                  paddingBottom: '18px',
                  color: 'white',
                  marginRight: '20px',
                };
              }}
            >
              signup
            </NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '1px solid white' : 'none',
                  textDecoration: 'none',
                  paddingBottom: '18px',
                  color: 'white',
                  marginRight: '20px',
                };
              }}
            >
              login
            </NavLink>
          </StyledLink>
        </>
      )}
    </StyledHeader>
  );
};
