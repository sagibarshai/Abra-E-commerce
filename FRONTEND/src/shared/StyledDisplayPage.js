import styled from 'styled-components';
import { BR } from '../data/cssBrakePoints';
const { mobileM } = BR;
export const StyledMainContainer = styled.main`
position:relative;
  margin-left: 24px;
  font-family: 'Assistant', sans-serif;
  margin-bottom: 100px;
  height: auto;
  display: flex;
  position: relative;
  @media ${mobileM} {
    flex-direction: column;
    margin: 0;
    padding: 0 20px;
  }
`;
export const StyledTitle = styled.h1`
  font-family: 'Assistant', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #1a223e;
  display: inline-block;
  position: absolute;
  top: 64px;
  left: 24px;
  @media ${mobileM} {
    order: 2;
    position: relative;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: bold;
    display: inline-block;
    width: max-content;
    margin-top: 36px;
  
  }
`;
export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 48px;
  height: auto;
  margin-top: 156px;
  flex-grow: 8.1;
  @media ${mobileM} {
    order: 3;
    width: 100%;
    column-gap: 20px;
    row-gap: 18px;
    margin: 0;
  }
`;
export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  flex-grow: 1;
  @media ${mobileM} {
    min-width: 160px;
    min-height: 264px;
  }
`;
export const StyledText = styled.span`
  color: ${(props) => props.color};
  margin-top: ${(props) => props.marginTop};
  @media ${mobileM} {
    font-size: 14px;
  }
`;
export const StyledImg = styled.img`
  @media ${mobileM} {
    width: 160px;
    height: 160px;
  }
`;
