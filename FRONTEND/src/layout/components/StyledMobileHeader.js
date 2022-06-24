import styled from 'styled-components';
import { BR } from '../../data/cssBrakePoints';
const { laptopL, mobileL, mobileM } = BR;
export const StyledMediumMobileContainer = styled.div`
  display: none;
  font-family: 'Assistant', sans-serif;
  @media ${mobileM} {
    display: inline-block;
  }
`;
export const StyledMobileHeader = styled.header`
  background-color: #1a223e;
  width: 100vw;
  height: 64px;
  display: inline-block;
`;
export const StyledMobileContentContainer = styled.div`
  margin: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledHeaderMenu = styled.img`
  width: 23.3px;
  height: 19.9px;
`;
export const StyledPraimaryLogo = styled.i`
  width: 142.4px;
  height: 24px;
  flex-grow: 0;
  margin: 20px auto;
  object-fit: contain;
`;
export const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const StyledUserLogo = styled.img`
  width: 26px;
  height: 26px;
`;
export const StyledText = styled.span`
  color: white;
  font-size: 14px;
`;
export const StyledMenuPopup = styled.div`
  width: 75%;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: white;
  box-shadow: 1px 1px solid white;
  z-index: 1;
`;
export const StyledPopupHeader = styled.div`
  margin: 20px 16px auto 18px;
  display: flex;
  justify-content: space-between;
`;
export const StyledXButton = styled.img`
  width: 32px;
  height: 32px;
`;
export const StyledNavContainer = styled.div`
  margin-top: 51px;
  margin-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;
export const StyledLink = styled.div`
  text-decoration: none;
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  color: #1a223e;
`;
export const NavLinkLogout = styled.div`
  position: absolute;
  bottom: 41.5px;
  left: 18px;
  display: flex;
  align-items: center;
`;
