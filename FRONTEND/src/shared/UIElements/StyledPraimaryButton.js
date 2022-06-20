import styled from 'styled-components';
export const StyledPraimaryButton = styled.button`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  margin-top: ${(props) => props.marginTop};
  cursor: pointer;
  height: 42px;
  font-family: 'Assistant', sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.72px;
`;
