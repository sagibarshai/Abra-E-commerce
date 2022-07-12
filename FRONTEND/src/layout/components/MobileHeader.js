import React, { useState, useEffect } from 'react';
import {
  StyledMediumMobileContainer,
  StyledMobileHeader,
  StyledMobileContentContainer,
  StyledHeaderMenu,
  StyledPraimaryLogo,
  StyledUserLogo,
  StyledText,
  StyledFlexColumn,
  StyledPopupHeader,
  StyledMenuPopup,
  StyledXButton,
  StyledNavContainer,
  StyledLink,
  NavLinkLogout,
} from './StyledMobileHeader';
import { NavLink } from 'react-router-dom';
import { logoutHandler } from '../../utils/logoutHandler';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import userIcon from '../../svg/userIcon.png';
import { NAV_AUTH_LINKS, NAV_LINKS,MANAGER_NAV_LINKS } from '../../shared/links';

const MobileHeader = (props) => {
  let ALL_LINKS = [...NAV_LINKS, ...NAV_AUTH_LINKS];
  ALL_LINKS = ALL_LINKS.filter((link) => link.to !== '/logout');
  const [navLinks, setNavLinks] = useState(ALL_LINKS);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [links , setLinks] = useState(NAV_LINKS)
  const toggleMenuHandler = () => {
    setToggleMenu((prevState) => !prevState);
  };
  useEffect(() => {
    if (props.userIsLoggedin) {
      setLinks(NAV_LINKS);
       if(props.isManager) {
        let managerLinks = [...MANAGER_NAV_LINKS]
      setLinks(managerLinks)
    }
  }
  else setLinks([...NAV_LINKS ,...NAV_AUTH_LINKS].filter(link => link.to!=='/logout'))
  }, [props.userIsLoggedin , props.isManager]);
  return (
    <StyledMediumMobileContainer>
      <StyledMobileHeader>
        <StyledMobileContentContainer>
          <StyledHeaderMenu
            src="/images/menu.png"
            onClick={toggleMenuHandler}
          />
          <StyledPraimaryLogo>
            <Logo />
          </StyledPraimaryLogo>
          <StyledFlexColumn>
            <StyledUserLogo src={userIcon} />
            {props.username && (
              <StyledText capitalize>{props.username}</StyledText>
            )}
          </StyledFlexColumn>
        </StyledMobileContentContainer>
      </StyledMobileHeader>
      {toggleMenu && (
        <StyledMenuPopup>
          <StyledPopupHeader>
            <img src="/images/logoWhite.png" />
            <StyledXButton
              src="/images/XButton.png"
              onClick={toggleMenuHandler}
            />
          </StyledPopupHeader>
          <StyledNavContainer>
            {links.map((link, index) => {
              return (
                <StyledLink key={index}>
                  <NavLink
                  end
                    onClick={() => {
                      setTimeout(() => {
                        toggleMenuHandler();
                      }, 500);
                    }}
                    to={link.to}
                    style={({ isActive }) => {
                      return {
                        borderLeft: isActive ? '2px solid #1a223e' : 'none',
                        paddingLeft: '4px',
                        textDecoration: 'none',
                        fontWeight: isActive ? '500' : '300',
                      };
                    }}
                  >
                    {link.text}
                  </NavLink>
                </StyledLink>
              );
            })}
            {props.userIsLoggedin && (
              <NavLinkLogout>
                <img src="/images/logout.png" />
                <NavLink
                  onClick={() => {
                    logoutHandler(props.userId, props.setUserIsLoggedin);
                    setTimeout(() => {
                      toggleMenuHandler();
                      window.location.reload();
                    }, 500);
                  }}
                  to="/logout"
                  style={({ isActive }) => {
                    return {
                      paddingLeft: '4px',
                      textDecoration: 'none',
                      fontWeight: isActive ? '500' : '300',
                    };
                  }}
                >
                  Logout
                </NavLink>
              </NavLinkLogout>
            )}
          </StyledNavContainer>
        </StyledMenuPopup>
      )}
    </StyledMediumMobileContainer>
  );
};
export default MobileHeader;
