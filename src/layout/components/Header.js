import { BrowserRouter, NavLink } from 'react-router-dom';
import {
  StyledHeader,
  StyledNav,
  StyledLink,
  StyledLogo,
  StyledUserLogo,
} from './style/header-style';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import userIcon from '../../svg/userIcon.png';
export default () => {
  return (
    <BrowserRouter>
      <StyledHeader>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledNav>
          <StyledLink>
            <NavLink
              to="/hello1"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? 'underline' : 'none',
                  color: 'white',
                };
              }}
            >
              hello1
            </NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink
              to="/hello2"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? 'underline' : 'none',
                  color: 'white',
                };
              }}
            >
              hello2
            </NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink
              to="/hello3"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? 'underline' : 'none',
                  color: 'white',
                };
              }}
            >
              hello3
            </NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink
              to="/hello4"
              style={({ isActive }) => {
                return {
                  borderBottom: isActive ? '2px solid white' : 'none',
                  textDecoration: 'none',
                  paddingBottom: '10px',
                  color: 'white',
                  lineHeight: '20px',
                };
              }}
            >
              hello4
            </NavLink>
          </StyledLink>
          <StyledLink>
            <NavLink
              to="/hello5"
              style={({ isActive }) => {
                return {
                  textDecoration: isActive ? 'underline' : 'none',
                  color: 'white',
                };
              }}
            >
              hello5
            </NavLink>
          </StyledLink>
          <NavLink
            to="/hello6"
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : 'none',
                color: 'white',
              };
            }}
          >
            hello6
          </NavLink>
        </StyledNav>
        <StyledUserLogo src={userIcon} />
      </StyledHeader>
    </BrowserRouter>
  );
};
