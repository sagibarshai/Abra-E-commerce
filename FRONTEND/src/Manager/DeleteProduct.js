import React from "react";
import styled from "styled-components";
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { StyledPraimaryButton } from "../shared/UIElements/StyledPraimaryButton";
const DeleteProduct = (props) => {
  const navigate = useNavigate();
  const location = useLocation().state;
  const deleteProductHandler = () => {
    const itemObj = {
        name:location.name,
        price:location.price,
        imgSrc:location.imgSrc,
        cartQty:location.cartQty
    }
    axios.put(process.env.REACT_APP_BACKEND_URL + '/manager/delete-product',  itemObj)
    .then(res => navigate('/manager/products'))
    .catch(err=>console.log(err))
  }

  return (
    <StyledContainer>
      <StyledText fontSize="20px" color="black">
        Hey {props.username}!
      </StyledText>
      <br />
      <StyledText fontSize="18px" color="black">
        Are you sure that you want to delete this product?
      </StyledText>
      
      <StyledItem>
        <StyledImg src={location.imgSrc} />
        <StyledText fontSize="22px">{location.name}</StyledText>
        <StyledText fontSize="22px">{location.price} ILS</StyledText>
        <StyledPraimaryButton
          backgroundColor="black"
          hoverBackgroundColor="white"
          color="white"
          hoverColor="black"
          border="none"
          boxShadow="2px 2px 2px solid black"
          width="90%"
          onClick={() => navigate("/manager/products")}
        >
          No
        </StyledPraimaryButton>
        <StyledPraimaryButton
          backgroundColor="black"
          hoverBackgroundColor="white"
          color="white"
          hoverColor="black"
          border="none"
          boxShadow="2px 2px 2px solid black"
          width="90%"
          onClick={deleteProductHandler}
        >
          Yes
        </StyledPraimaryButton>
      </StyledItem>
    </StyledContainer>
  );
};
const StyledContainer = styled.div`
margin-top:40px;
  width: max-content;
  min-height: 70vh;
  color: black;
  font-family: inherit;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const StyledItem = styled.div`
margin-top:20px;
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 43vh;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const StyledImg = styled.img`
  width: 50%;
  object-fit: contain;
  height: 25vh;
`;
const StyledText = styled.p`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize};
  line-height: 0;
`;

export default DeleteProduct;
