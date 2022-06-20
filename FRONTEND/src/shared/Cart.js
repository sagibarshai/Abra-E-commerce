import React from 'react';
import {
  StyledCartConainer,
  StyledParagraph,
  StyledTitle,
  StyledItemsContainer,
  StyledItemTitle,
  StyledItemPrice,
  StyledIncreseAndDecreseButton,
  StyledXButton,
  StyledTextFlexContainer,
  StyledImgContainer,
  StyledTextContainer,
  StyledFlexItem,
  StyledImg,
  StyledFlexTextContainer,
} from './StyledCart';
import { StyledPraimaryButton } from './UIElements/StyledPraimaryButton';
import { useState, useEffect } from 'react';
import { allProducts } from '../data/products';
import axios from 'axios';
function allStorage() {
  var values = [],
    keys = Object.keys(localStorage),
    i = keys.length;

  while (i--) {
    values.push(localStorage.getItem(keys[i]));
  }

  return [keys, values];
}
const [localStorageKeys, localStorageValues] = allStorage();
export default (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);

  // console.log(itemsInCart);

  return (
    <StyledCartConainer>
      <StyledTitle>My Cart</StyledTitle>
      <StyledParagraph
        color="#000"
        fontSize="16px"
        marginTop="9px"
        marginBottom="34px"
      >
        Items are reserved for 60 minutes
      </StyledParagraph>
      <StyledItemsContainer>
        {itemsInCart.map((item, index) => {
          return (
            <StyledFlexItem key={index}>
              <StyledImgContainer>
                <StyledImg src={item.imgSrc} />
              </StyledImgContainer>
              <StyledTextContainer>
                <StyledTextFlexContainer flexDirection="column">
                  <StyledItemTitle>Black T-shirt</StyledItemTitle>
                  <StyledItemPrice>89 ILS</StyledItemPrice>
                  <StyledTextFlexContainer
                    flexDirection="row"
                    justifyContant="space-between"
                    marginTop="30px"
                  >
                    <div>
                      <StyledIncreseAndDecreseButton>
                        -
                      </StyledIncreseAndDecreseButton>
                      {item.cartQty}
                      <StyledIncreseAndDecreseButton>
                        +
                      </StyledIncreseAndDecreseButton>
                    </div>
                    <StyledXButton>X</StyledXButton>
                  </StyledTextFlexContainer>
                </StyledTextFlexContainer>
              </StyledTextContainer>
            </StyledFlexItem>
          );
        })}
        {/*
        <StyledFlexItem>
          <StyledImgContainer>
            <StyledImg src="/images/tshirt.jpg" />
          </StyledImgContainer>
          <StyledTextContainer>
            <StyledTextFlexContainer flexDirection="column">
              <StyledItemTitle>Black T-shirt</StyledItemTitle>
              <StyledItemPrice>89 ILS</StyledItemPrice>
              <StyledTextFlexContainer
                flexDirection="row"
                justifyContant="space-between"
                marginTop="30px"
              >
                <div>
                  <StyledIncreseAndDecreseButton>
                    -
                  </StyledIncreseAndDecreseButton>
                  {1}
                  <StyledIncreseAndDecreseButton>
                    +
                  </StyledIncreseAndDecreseButton>
                </div>
                <StyledXButton>X</StyledXButton>
              </StyledTextFlexContainer>
            </StyledTextFlexContainer>
          </StyledTextContainer>
        </StyledFlexItem> */}
      </StyledItemsContainer>
      <StyledFlexTextContainer>
        <StyledParagraph color="#000" fontSize="20px">
          Subtotal
        </StyledParagraph>
        <StyledParagraph color="#000" fontSize="20px">
          176 ILS
        </StyledParagraph>
      </StyledFlexTextContainer>
      <StyledPraimaryButton
        backgroundColor="#000"
        color="white"
        marginTop="24px"
        width="268px"
      >
        CHECKOUT
      </StyledPraimaryButton>
    </StyledCartConainer>
  );
};
