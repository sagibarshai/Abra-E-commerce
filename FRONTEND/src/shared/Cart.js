import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

export default (props) => {
  const deleteItemHandler = (itemName) => {
    axios
      .delete(`http://localhost:5500/api/users/${props.userId}`, itemName)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const increseQtyByOneHandler = (itemName) => {
    axios
      .put(`http://localhost:5500/api/users/${props.userId}/increse`, {
        itemName,
      })
      .then((res) => console.log(res));
  };
  const decreseQtyByOneHandler = (itemName) => {
    axios
      .put(`http://localhost:5500/api/users/${props.userId}`)
      .catch((err) => console.log(err));
  };
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
        {props.itemsInCart &&
          props.itemsInCart.map((item, index) => {
            return (
              <StyledFlexItem key={index}>
                <StyledImgContainer>
                  <StyledImg src={item.imgSrc} />
                </StyledImgContainer>
                <StyledTextContainer>
                  <StyledTextFlexContainer flexDirection="column">
                    <StyledItemTitle>{item.name}</StyledItemTitle>
                    <StyledItemPrice>{item.price} ILS</StyledItemPrice>
                    <StyledTextFlexContainer
                      flexDirection="row"
                      justifyContant="space-between"
                      marginTop="30px"
                    >
                      <div>
                        <StyledIncreseAndDecreseButton
                          onClick={decreseQtyByOneHandler}
                        >
                          -
                        </StyledIncreseAndDecreseButton>
                        {item.cartQty}
                        <StyledIncreseAndDecreseButton
                          onClick={() => {
                            increseQtyByOneHandler(item.name);
                          }}
                        >
                          +
                        </StyledIncreseAndDecreseButton>
                      </div>
                      <StyledXButton onClick={deleteItemHandler}>
                        X
                      </StyledXButton>
                    </StyledTextFlexContainer>
                  </StyledTextFlexContainer>
                </StyledTextContainer>
              </StyledFlexItem>
            );
          })}
      </StyledItemsContainer>
      <StyledFlexTextContainer>
        <StyledParagraph color="#000" fontSize="20px">
          Subtotal
        </StyledParagraph>
        <StyledParagraph color="#000" fontSize="20px">
          {props.totalPrice} ILS
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
