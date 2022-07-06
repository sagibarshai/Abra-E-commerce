import React, { useEffect,useState } from 'react';
import axios from 'axios';
import MobileCart from './MobileCart';
import {
  StyledCartConainer,
  StyledParagraph,
  StyledCartTitle,
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
  StyledParagraphMessage,
} from './StyledDesktopCart';
import { StyledPraimaryButton } from './UIElements/StyledPraimaryButton';
export default (props) => {
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + `/users/${props.userId}`)
      .then((res) => {
        props.setTotalPrice(res.data.totalPrice);
        props.setItemsInCart(res.data.cartItems);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteItemHandler = (productObj) => {
    axios
      .put(
        process.env.REACT_APP_BACKEND_URL + `/users/${props.userId}/delete`,
        {
          productObj,
        }
      )
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
      .put(
        process.env.REACT_APP_BACKEND_URL + `/users/${props.userId}/increse`,
        {
          productObj,
          updatedTotalPrice,
          itemsInCart: updatedItemsInCart,
        }
      )
      .then((res) => {})
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
      .put(
        process.env.REACT_APP_BACKEND_URL + `/users/${props.userId}/decrese`,
        {
          totalCartPrice: updatedPrice,
          itemsInCart: updatedItemsInCart,
        }
      )
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <>
      <StyledCartConainer>
        <StyledCartTitle>My Cart</StyledCartTitle>
        {props.itemsInCart && props.itemsInCart.length > 0 && (
          <>
            <StyledParagraph
              display="none"
              color="#000"
              fontSize="16px"
              marginTop="9px"
              marginBottom="34px"
            >
              Items are reserved for 60 minutes
            </StyledParagraph>

            <StyledItemsContainer>
              {props.itemsInCart.map((item, index) => {
                return (
                  <StyledFlexItem key={index}>
                    <StyledImgContainer>
                      <StyledImg
                        src={item.imgSrc}
                        width="100px"
                        height="100px"
                      />
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
          </>
        )}
        <>
          {props.itemsInCart && props.itemsInCart.length > 0 && (
            <StyledFlexTextContainer>
              <StyledParagraph color="#000" fontSize="20px">
                Subtotal
              </StyledParagraph>
              <StyledParagraph color="#000" fontSize="20px">
                {props.totalPrice} ILS
              </StyledParagraph>
            </StyledFlexTextContainer>
          )}
        </>
        {props.itemsInCart && !props.itemsInCart.length && (
          <>
            <StyledImg src="/images/emptyCart.png" marginTop="227px" />
            <StyledParagraphMessage>Your cart is empty</StyledParagraphMessage>
          </>
        )}
        {!props.userId && (
          <>
            <StyledImg src="/images/emptyCart.png" marginTop="227px" />
            <StyledParagraphMessage>
              Your cart is empty{' '}
              {!props.userId ? ', signup and start to shop !' : ''}
            </StyledParagraphMessage>
          </>
        )}
        <StyledPraimaryButton
          backgroundColor="#000"
          color="white"
          marginTop="24px"
          marginBottom="48px"
          width="268px"
          disabled={
            (props.itemsInCart && !props.itemsInCart.length) || !props.userId
          }
        >
          CHECKOUT
        </StyledPraimaryButton>
      </StyledCartConainer>
      
      <MobileCart
        itemsInCart={props.itemsInCart}
        totalPrice={props.totalPrice}
        decreseQtyByOneHandler={decreseQtyByOneHandler}
        increseQtyByOneHandler={increseQtyByOneHandler}
        deleteItemHandler={deleteItemHandler}
        userId={props.userId}
      />
    </>
    
  );
};
