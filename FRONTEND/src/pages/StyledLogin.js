import styled from 'styled-components';
export const StyledMain = styled.main`
  background-image: url('/images/Background.png');
  text-align: center;
  font-family: Assistant;
  color: #fff;
  line-height: normal;
  width: 1920px;
  min-height: 100vh;
`;

export const StyledMainHeader = styled.h1`
  margin: 0;
  font-size: 6.4rem;
  font-weight: bold;
  letter-spacing: 0.856rem;
  padding-top: 100px;
`;
export const StyledFirstParagraph = styled.p`
  width: 426px;
  margin: 17px auto 91px auto;
  font-size: 2rem;
`;

export const StyledErrorsMessage = styled.p`
  font-size: 35px;
  color: white;
`;
export const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 600;
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
  &::placeholder {
    font-size: 2rem;
    line-height: 1;
    color: #9094ab;
    padding-left: 16px;
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
`;
export const StyledSecondParagraph = styled.p`
  margin: 8px auto 0 auto;
  padding-bottom: 100px;
  font-size: 1.6rem;
  color: #fff;
`;
