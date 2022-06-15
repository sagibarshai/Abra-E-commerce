import styled, { css } from 'styled-components';
export const StyledHeader = styled.header`
  background-color: #1a223e;
  width: 1920px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledLogo = styled.i`
  margin: 21px auto 21px 64px;
`;
export const StyledUserLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 36px;
`;
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 26px;
  min-width: 427px;
  margin-right: 1093px;
  align-items: center;
`;
export const StyledLink = styled.span`
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
`;
