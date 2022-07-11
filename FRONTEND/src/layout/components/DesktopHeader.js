import React,{useState , useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logoutHandler } from '../../utils/logoutHandler';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import userIcon from '../../svg/userIcon.png';
import { NAV_AUTH_LINKS, NAV_LINKS,MANAGER_NAV_LINKS } from '../../shared/links';
import {
  StyledBigDesktopContainer,
  StyledHeader,
  StyledNav,
  StyledLink,
  StyledLogo,
  StyledUserLogo,
  StyledButton,
  StyledUsername,
} from './StyledDesktopHeader';
const DesktopHeader = (props) => {
  const [links , setLinks] = useState(NAV_LINKS)

  useEffect(() => {
    if(props.isManager) {
      setLinks(MANAGER_NAV_LINKS)
    }
  } , [props.isManager])
  return (
    <StyledBigDesktopContainer>
      <StyledHeader>
        <Link to="/home">
          <StyledLogo>
            <Logo />
          </StyledLogo>
        </Link>
        <StyledNav>
          {links.map((link, index) => {
            return (
              <StyledLink key={index}>
                <NavLink
                end 
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
          <div style={{marginRight:'30px'}}>
            <StyledUsername>{props.username}</StyledUsername>
            <StyledButton>
              <StyledUserLogo src={userIcon} />
            </StyledButton>
            <StyledLink>
              <NavLink
                onClick={() => {
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
          </div>
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
    </StyledBigDesktopContainer>
  );
};
export default DesktopHeader;
