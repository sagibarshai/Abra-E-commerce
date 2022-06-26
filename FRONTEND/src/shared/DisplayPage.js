import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledTitle,
  StyledFlexContainer,
  StyledMainContainer,
  StyledItem,
  StyledText,
  StyledImg,
} from './StyledDisplayPage';
import { StyledPraimaryButton } from './UIElements/StyledPraimaryButton';
import Cart from './Cart';
export default (props) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const userId = localStorage.getItem('userId') || null;
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL +`/users/${userId}`)
      .then((res) => {
        setItemsInCart(res.data.items);
        setTotalPrice(res.data.totalPrice);
      })
      .catch((err) => console.log(err));
  }, []);

  const addToCarHandler = (productObj) => {
    if (!userId) return alert('Please Login');
    let updatedItemsInCart;
    let updatedTotalPrice;
    if (itemsInCart) {
      const exitingItem = itemsInCart.find(
        (item) => item.name === productObj.name
      );
      if (!exitingItem) {
        productObj.cartQty = 1;
        updatedItemsInCart = [...itemsInCart, productObj];
        setItemsInCart(updatedItemsInCart);
        updatedTotalPrice = totalPrice + productObj.price;
        setTotalPrice(updatedTotalPrice);
      } else {
        const exitingItemIndex = itemsInCart.findIndex(
          (item) => item.name === productObj.name
        );
        let updatedQty = exitingItem.cartQty + 1;
        let updatedProductObj = { ...productObj, cartQty: updatedQty };
        updatedItemsInCart = [...itemsInCart];
        updatedItemsInCart[exitingItemIndex] = updatedProductObj;
        updatedTotalPrice = totalPrice + productObj.price;
        setTotalPrice(updatedTotalPrice);
        setItemsInCart(updatedItemsInCart);
      }
    } else {
      updatedItemsInCart = productObj;
      updatedItemsInCart = [{ ...productObj, cartQty: 1 }];
      updatedTotalPrice = productObj.price;
      setTotalPrice(updatedTotalPrice);
      setItemsInCart([updatedItemsInCart]);
    }
    axios
      .put(process.env.REACT_APP_BACKEND_URL +`/users/${userId}`, {
        userId,
        itemsInCart: updatedItemsInCart,
        cartTotalPrice: updatedTotalPrice,
      })
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  return (
    <>
      <StyledMainContainer>
        <StyledTitle>{props.title}</StyledTitle>
        <StyledFlexContainer>
          {props.products.map((product, index) => {
            return (
              <StyledItem key={index}>
                <StyledImg src={product.imgSrc} />
                <StyledText color="#000" marginTop="16px">
                  {product.name}
                </StyledText>
                <StyledText color="#808285" marginTop="8px">
                  {product.price} ILS
                </StyledText>
                <StyledPraimaryButton
                  hoverColor="#fff"
                  hoverBackgroundColor="#000"
                  width="292px"
                  backgroundColor="#fff"
                  color="#000"
                  border="1px solid #000"
                  marginTop="16px"
                  mobileWidth="160px"
                  mobileHight="34px"
                  mobileFontSize="14px"
                  onClick={() => {
                    addToCarHandler(product);
                  }}
                >
                  ADD TO BAG
                </StyledPraimaryButton>
              </StyledItem>
            );
          })}
        </StyledFlexContainer>
        <Cart
          style={{ height: '2500px' }}
          itemsInCart={itemsInCart}
          totalPrice={totalPrice}
          userId={userId}
          setItemsInCart={setItemsInCart}
          setTotalPrice={setTotalPrice}
        />
      </StyledMainContainer>
    </>
  );
};
