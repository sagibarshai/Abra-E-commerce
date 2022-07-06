import styled from 'styled-components';
import { BR } from '../data/cssBrakePoints';
const { mobileM } = BR;
export const StyledMobileCartContainer = styled.div`
  display: none;
  @media (max-width:1000px) {
    display: block;
    width: 100%;
    height: 393px;
    text-align: center;
    font-family: 'Assistant' sans-serif;
    
  }
`;
export const StyledTitle = styled.h2`
  margin-top: 24px;
  font-size: 24px;
  font-weight: bold;
  color: #1a223e;
`;
export const StyledContainer = styled.div`
  margin-left: 18px;
`;
export const StyledFlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justifayContent};
  margin-top: ${(props) => props.marginTop};
  gap: 18px;
  overflow-x: scroll;
  overflow-y: hidden;
`;
export const StyledFlexColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 8px;
`;
export const StyledImgContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position};
  ${(props) => (props.center ? `display: inline-block ; margin:0 auto;` : '')}
  margin-right:20px;
`;
export const StyledImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;
export const StyledXButton = styled.button`
  font-size: 14px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 5px;
  right: 5px;
`;
export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
`;
export const StyledText = styled.span`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  ${(props) => (props.center ? `display:block ; margin:0 auto;` : '')};
  margin-top: ${(props) => props.marginTop};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;
