import styled from 'styled-components';
import { BR } from '../../data/cssBrakePoints';
const { mobileM } = BR;
export const StyledPraimaryButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  cursor: pointer;
  height: 42px;
  font-family: 'Assistant', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.72px;
  transition: all 0.5s ease-out;
  &:disabled {
    background-color: #808080;
  }
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    color: ${(props) => props.hoverColor};
  }
  @media ${mobileM} {
    width: ${(props) => props.mobileWidth};
    height: ${(props) => props.mobileHeight};
    font-size: ${(props) => props.mobileFontSize};
    border: solid 1px #000;
    width: 100%;
    padding: 0;
  }
`;
