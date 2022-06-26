import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { BR } from '../../data/cssBrakePoints';
const { desktop } = BR;
export const StyledBigDesktopContainer = styled.div`
  display: none;
  @media (min-width: 426px) {
    display: inline-block;
  }
`;
export const StyledHeader = styled.header`
  background-color: #1a223e;
  width: 1920px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
export const StyledLogo = styled.i`
  margin: 21px auto 21px 64px;
`;
export const StyledUserLogo = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 36px;
  vertical-align: middle;
`;
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: 26px;
  min-width: 427px;
  margin-right: 950px;
  align-items: center;
`;
export const StyledLink = styled.span`
  font-family: 'Assistant', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
`;
export const StyledButton = styled.button`
  background-color: transparent;
  width: fit-content;
  height: fit-content;
  border: none;
  cursor: pointer;
`;
export const StyledUsername = styled.span`
  color: white;
  font-size: 22px;
  vertical-align: middle;
  text-transform: capitalize;
`;
