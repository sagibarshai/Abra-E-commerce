import { BrowserRouter, NavLink, Link } from 'react-router-dom';
import {
  StyledHeader,
  StyledNav,
  StyledLink,
  StyledLogo,
  StyledUserLogo,
} from './style/StyledHeader';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import userIcon from '../../svg/userIcon.png';
export default () => {
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
      <StyledUserLogo src={userIcon} />
    </StyledHeader>
  );
};
