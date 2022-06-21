import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledTitle,
  StyledFlexContainer,
  StyledMainContainer,
  StyledItem,
  StyledText,
} from './StyledDisplayPage';
import { StyledPraimaryButton } from './UIElements/StyledPraimaryButton';
import Cart from './Cart';
export default (props) => {
  const userId = localStorage.getItem('userId') || null;

  const addToCarHandler = (productObj) => {
    axios
      .put(`http://localhost:5500/api/users/${userId}`, { productObj, userId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <StyledTitle>{props.title}</StyledTitle>;
      <StyledMainContainer>
        <StyledFlexContainer>
          {props.products.map((product, index) => {
            return (
              <StyledItem key={index}>
                <img src={product.imgSrc} />
                <StyledText color="#000" marginTop="16px">
                  {product.name}
                </StyledText>
                <StyledText color="#808285" marginTop="8px">
                  {product.price}
                </StyledText>
                <StyledPraimaryButton
                  width="292px"
                  backgroundColor="#fff"
                  color="#000"
                  border="1px solid #000"
                  marginTop="16px"
                  onClick={() => {
                    addToCarHandler(product);
                  }}
                >
                  Buy now
                </StyledPraimaryButton>
              </StyledItem>
            );
          })}
        </StyledFlexContainer>
        <Cart products={props.products} />
      </StyledMainContainer>
    </>
  );
};
