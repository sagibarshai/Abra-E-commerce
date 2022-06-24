import styled from 'styled-components';
export const StyledMainContainer = styled.main`
  margin-left: 24px;
  font-family: 'Assistant', sans-serif;
  margin-bottom: 100px;
  height: 100%;
  /* @media (max-width: 400px) {
    width: 400px;
  } */
`;
export const StyledTitle = styled.h1`
  margin: 64px 117px 40px 24px;
  font-family: 'Assistant', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #1a223e;
  display: inline-block;
`;
export const StyledFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 48px;
  column-gap: 24px;
  height: auto;
  width: 1556px;
  /* @media (max-width: 400px) {
    width: min-content;
  } */

  /* background-color: blue; */
`;
export const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
`;
export const StyledText = styled.span`
  color: ${(props) => props.color};
  margin-top: ${(props) => props.marginTop};
`;
