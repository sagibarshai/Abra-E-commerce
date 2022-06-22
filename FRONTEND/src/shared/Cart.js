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
        props.setTotalPrice(res.data.totalPrice);
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
        props.setTotalPrice(res.data.totalPrice);
        props.setItemsInCart(res.data.cartItems);
      })
      .catch((err) => console.log(err));
  };

  const increseQtyByOneHandler = (productObj) => {
    const { totalPrice, itemsInCart } = props;
    const exitingItem = itemsInCart.find(
      (item) => item.name === productObj.name
    );
    const exitingItemIndex = itemsInCart.findIndex(
      (item) => item.name === productObj.name
    );
    const updatedQty = exitingItem.cartQty + 1;
    const updatedProduct = { ...productObj, cartQty: updatedQty };
    let updatedItemsInCart = itemsInCart;
    updatedItemsInCart[exitingItemIndex] = updatedProduct;
    props.setItemsInCart(updatedItemsInCart);
    const updatedTotalPrice = totalPrice + productObj.price;
    props.setTotalPrice(updatedTotalPrice);
    axios
      .put(`http://localhost:5500/api/users/${props.userId}/increse`, {
        productObj,
        updatedTotalPrice,
        itemsInCart: updatedItemsInCart,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const decreseQtyByOneHandler = (productObj) => {
    const { totalPrice, itemsInCart } = props;
    let updatedItemsInCart;
    let updatedPrice;
    let updatedProduct;
    let updatedQty;
    const exitingItem = itemsInCart.find(
      (item) => item.name === productObj.name
    );
    const exitingItemIndex = itemsInCart.findIndex(
      (item) => item.name === productObj.name
    );
    if (exitingItem.cartQty === 1) {
      updatedQty = 0;
      updatedProduct = exitingItem;
      updatedProduct.cartQty = updatedQty;
      updatedItemsInCart = [...itemsInCart];
      updatedItemsInCart[exitingItemIndex] = updatedProduct;
      updatedItemsInCart = updatedItemsInCart.filter(
        (item) => item.cartQty !== 0
      );
      props.setItemsInCart(updatedItemsInCart);
      updatedPrice = props.totalPrice - exitingItem.price;
      props.setTotalPrice(updatedPrice);
    } else {
      updatedQty = exitingItem.cartQty - 1;
      updatedProduct = exitingItem;
      updatedProduct.cartQty = updatedQty;
      updatedItemsInCart = itemsInCart;
      updatedItemsInCart[exitingItemIndex] = updatedProduct;
      props.setItemsInCart(updatedItemsInCart);
      updatedPrice = totalPrice - updatedItemsInCart[exitingItemIndex].price;
      props.setTotalPrice(updatedPrice);
    }
    axios
      .put(`http://localhost:5500/api/users/${props.userId}/decrese`, {
        totalCartPrice: updatedPrice,
        itemsInCart: updatedItemsInCart,
      })
      .then((res) => console.log(res))
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
