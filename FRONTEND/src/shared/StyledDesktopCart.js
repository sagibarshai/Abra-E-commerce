import styled from "styled-components";
import { BR } from "../data/cssBrakePoints";
const { mobileM } = BR;
export const StyledCartConainer = styled.aside`
  height: auto;
  margin-left: 24px;
  display: flex;
  flex-direction: column;
  font-family: "Assistant", sans-serif;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
  padding-left: 24px;
  width: auto;
  flex-grow: 1.9;
  padding-right: 48px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const StyledCartTitle = styled.h2`
  margin-top: 40px;
  color: #1a223e;
  font-size: 40px;
  font-weight: bold;
  line-height: 0;
`;
export const StyledParagraph = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
`;
export const StyledItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 177px;
`;
export const StyledFlexItem = styled.div`
  width: 268px;
  height: 100px;
  display: flex;
  flex-direction: row;
  gap: 11px;
`;
export const StyledImgContainer = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
`;
export const StyledImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => props.marginTop};
`;
export const StyledTextContainer = styled.div`
  display: inline-block;
  width: 268px;
  height: 100px;
`;
export const StyledTextFlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContant};
  margin-top: ${(props) => props.marginTop};
`;

export const StyledItemTitle = styled.span`
  font-size: 14px;
  line-height: 1;
  color: #000;
`;
export const StyledItemPrice = styled.span`
  font-size: 16px;
  line-height: 1;
  color: #808285;
  margin-top: 8px;
`;
export const StyledXButton = styled.button`
  color: #1c1b1f;
  width: 12.7px;
  height: 12.7px;
  border: none;
  background-color: transparent;
  font-weight: bolder;
  cursor: pointer;
`;
export const StyledIncreseAndDecreseButton = styled.button`
  font-size: 25px;
  color: #808285;
  border: none;
  background-color: transparent;
  vertical-align: middle;
  cursor: pointer;
`;

export const StyledFlexTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 268px;
`;
export const StyledParagraphMessage = styled.p`
  margin: 24px auto 156px auto;
`;
