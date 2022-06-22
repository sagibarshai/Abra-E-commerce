import React, { useEffect, useState } from 'react';
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
  const [itemQty, setItemQty] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5500/api/users/${props.userId}`)
      .then((res) => {
        props.setToalPrice(res.data.totalPrice);
        props.setItemsInCart(res.data.cartItems);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteItemHandler = (productObj) => {
    axios
      .put(`http://localhost:5500/api/users/${props.userId}/delete`, {
        productObj,
      })
      .then((res) => {
        props.setToalPrice(res.data.totalPrice);
        props.setItemsInCart(res.data.cartItems);
      })
      .catch((err) => console.log(err));
  };

  const increseQtyByOneHandler = (productObj) => {
    const { totalPrice, itemsInCart } = props;
    const exitingItem = itemsInCart.find(
      (item) => item.name === productObj.name
    );
    exitingItem.cartQty++;
    const exitingItemIndex = itemsInCart.findIndex(
      (item) => item.name === productObj.name
    );
    let updatedItemsInCart = itemsInCart;
    updatedItemsInCart[exitingItemIndex] = exitingItem;
    props.setItemsInCart(updatedItemsInCart);
    const updatedPrice =
      updatedItemsInCart[exitingItemIndex].cartQty * productObj.price;
    props.setToalPrice(updatedPrice);

    axios
      .put(`http://localhost:5500/api/users/${props.userId}/increse`, {
        productObj,
        totalPrice,
        itemsInCart,
      })
      .then((res) => {
        props.setToalPrice(res.data.totalPrice);
        props.setItemsInCart(res.data.cartItems);
      })
      .catch((err) => console.log(err));
  };

  const decreseQtyByOneHandler = (productObj) => {
    const { totalPrice, itemsInCart } = props;
    const exitingItem = itemsInCart.find(
      (item) => item.name === productObj.name
    );
    if (exitingItem.cartQty === 0) {
      const updatedItemsInCart = itemsInCart.filter(
        (item) => item.cartQty !== 0
      );
      return props.setItemsInCart(updatedItemsInCart);
    }
    exitingItem.cartQty--;
    const exitingItemIndex = itemsInCart.findIndex(
      (item) => item.name === productObj.name
    );
    let updatedItemsInCart = itemsInCart;
    updatedItemsInCart[exitingItemIndex] = exitingItem;
    props.setItemsInCart(updatedItemsInCart);
    const updatedPrice =
      updatedItemsInCart[exitingItemIndex].cartQty * productObj.price;
    props.setToalPrice(updatedPrice);

    axios
      .put(`http://localhost:5500/api/users/${props.userId}/decrese`, {
        productObj,
        totalPrice,
        itemsInCart,
      })
      .then((res) => {
        props.setToalPrice(res.data.totalPrice);
        props.setItemsInCart(res.data.cartItems);
      })
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
                          onClick={() => {
                            decreseQtyByOneHandler(item);
                          }}
                        >
                          -
                        </StyledIncreseAndDecreseButton>
                        {item.cartQty}
                        <StyledIncreseAndDecreseButton
                          onClick={() => {
                            increseQtyByOneHandler(item);
                          }}
                        >
                          +
                        </StyledIncreseAndDecreseButton>
                      </div>
                      <StyledXButton
                        onClick={() => {
                          deleteItemHandler(item);
                        }}
                      >
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
