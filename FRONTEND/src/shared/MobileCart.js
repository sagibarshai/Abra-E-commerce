import React from 'react';
import { StyledPraimaryButton } from './UIElements/StyledPraimaryButton';
import {
  StyledMobileCartContainer,
  StyledTitle,
  StyledFlexRowContainer,
  StyledFlexColumnContainer,
  StyledImgContainer,
  StyledImg,
  StyledXButton,
  StyledButtonsContainer,
  StyledButton,
  StyledContainer,
  StyledText,
} from './StyledMobileCart';
const MobileCart = (props) => {
  return (
    <StyledMobileCartContainer>
      <StyledTitle>My Cart</StyledTitle>
      <StyledContainer>
        <StyledFlexRowContainer>
          <StyledFlexColumnContainer>
            <StyledImgContainer>
              <StyledImg src="/images/tshirt.jpg" />
              <StyledXButton>X</StyledXButton>
            </StyledImgContainer>
            <StyledText color="black" fontSize="16px">
              Black T-shirt
            </StyledText>
            <StyledText color="#808285" fontSize="14px">
              89 ILS
            </StyledText>
            <StyledButtonsContainer>
              <StyledButton>-</StyledButton>
              <StyledText color="#808285" fontSize="16px">
                1
              </StyledText>
              <StyledButton>+</StyledButton>
            </StyledButtonsContainer>
          </StyledFlexColumnContainer>
        </StyledFlexRowContainer>
        <StyledFlexRowContainer
          marginTop="28px"
          justifayContent="space-between"
        >
          <StyledText>Subtotal</StyledText>
          <StyledText>176 ILS</StyledText>
        </StyledFlexRowContainer>
        <StyledPraimaryButton
          backgroundColor="#808080"
          width="339px"
          border="none"
          color="white"
          marginTop="8px"
        >
          CHECKOUT
        </StyledPraimaryButton>
      </StyledContainer>
    </StyledMobileCartContainer>
  );
};
export default MobileCart;
