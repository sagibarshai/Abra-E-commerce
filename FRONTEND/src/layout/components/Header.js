import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledNav,
  StyledLink,
  StyledLogo,
  StyledUserLogo,
  StyledButton,
  StyledUsername,
} from './StyledHeader';
import { logoutHandler } from '../../utils/logoutHandler';
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
  const authHandler = () => {};
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
          <StyledUsername>Hello {props.username}</StyledUsername>
          <StyledButton onClick={authHandler}>
            <StyledUserLogo src={userIcon} />
          </StyledButton>
          <StyledLink>
            <NavLink
              onClick={() => {
                console.log('from header logout' + props.userId);
                logoutHandler(props.userId, props.setUserIsLoggedin);
              }}
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
