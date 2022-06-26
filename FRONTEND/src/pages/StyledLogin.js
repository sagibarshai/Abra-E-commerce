import styled from 'styled-components';
import { BR } from '../data/cssBrakePoints';
const { mobileM } = BR;
export const StyledMain = styled.main`
  background-image: url('/images/Background.png');
  text-align: center;
  font-family: 'Assistant', sans-serif;
  color: #fff;
  line-height: normal;
  width: 100vw;
  min-height: 100vh;
  @media ${mobileM} {
    min-height: 100vh;
  }
`;

export const StyledMainHeader = styled.h1`
  margin: 0;
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 0.856rem;
  padding-top: 100px;
  @media ${mobileM} {
    font-size: 36px;
    letter-spacing: normal;
  }
`;
export const StyledFirstParagraph = styled.p`
  width: 426px;
  margin: 17px auto 91px auto;
  font-size: 2rem;
  @media ${mobileM} {
    font-size: 25px;
    width: 80%;
    padding-top: 30px;
  }
`;

export const StyledErrorsMessage = styled.p`
  font-size: 35px;
  color: white;
  @media ${mobileM} {
    font-size: 25px;
    padding-bottom: 20px;
    width: 80%;
    display: inline-block;
    margin: 0 auto;
  }
`;
export const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
  @media ${mobileM} {
    font-size: 20px;
    padding-bottom: 20px;
  }
`;
export const StyledInput = styled.input`
  width: 426px;
  height: 60px;
  opacity: 0.9;
  border-radius: 12px;
  background-color: #fff;
  margin: 0 auto 51px auto;
  font-size: 25px;
  text-align: center;
  font-family: Assistant;
  letter-spacing: 1px;
  text-align: center;
  &::placeholder {
    font-size: 2rem;
    line-height: 1;
    color: #9094ab;
    padding-left: 16px;
  }
  @media ${mobileM} {
    font-size: 20px;
    padding-bottom: 20px;
    width: 80%;
    height: 55px;
    line-height: 15px;
    padding: 0;
    &::placeholder {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px;
    }
  }
`;
export const StyledButton = styled.button`
  width: 426px;
  height: 60px;
  font-size: 2.6rem;
  font-weight: bold;
  border-radius: 12px;
  color: #fff;
  background-color: #ff9f00;
  border: none;
  cursor: pointer;
  @media ${mobileM} {
    width: 80%;
    height: 55px;
    font-size: 20px;
  }
`;
export const StyledSecondParagraph = styled.p`
  margin: 8px auto 0 auto;
  padding-bottom: 100px;
  font-size: 1.6rem;
  color: #fff;
  @media ${mobileM} {
    padding-top: 25px;
    font-size: 24px;
    width: 80%;
  }
`;
