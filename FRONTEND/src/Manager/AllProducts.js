import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import {
  StyledItem,
  StyledFlexContainer,
  StyledText,
  StyledImg,
  StyledButtonContainer,
  StyledTitle,
} from "../shared/StyledDisplayPage";
import EditProduct from "./EditProduct"
import {Link  } from 'react-router-dom' 
import { StyledPraimaryButton } from "../shared/UIElements/StyledPraimaryButton";
const AllProducts = () => {
  const [productsFromDb, setProductsFromDb] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/products")
      .then((res) => {
        //   const something = res.data[0]
          console.log(res.data[0].items)
        setProductsFromDb(res.data[0].items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledFlexContainer>
      <StyledTitle centerd>Hello Manager !</StyledTitle>
      {productsFromDb.length > 0 &&
        productsFromDb.map((product, index) => {
          return (
            <StyledItem width="25%" key={index}>
              <StyledImg src={product.imgSrc} />
              <StyledText>{product.name}</StyledText>
              <StyledText>{product.price} ILS</StyledText>
              <StyledButtonContainer>
                <StyledPraimaryButton
                  hoverBackgroundColor="black"
                  hoverColor="white"
                  marginTop="20px"
                  width="50%"
                  backgroundColor="white"
                  color="black"
                  border="2px solid lightgrey"
                  
                >
                 <Link state={{name:product.name , price:product.price , imgSrc:product.imgSrc}} style={{width:"40%", textDecoration:'none' ,color:'black', }} to={`/manager/products/${product.name}`}>Edit Product</Link>
                </StyledPraimaryButton>
                
                
                <StyledPraimaryButton
                  hoverBackgroundColor="black"
                  hoverColor="white"
                  marginTop="20px"
                  width="50%"
                  backgroundColor="white"
                  color="black"
                  border="2px solid lightgrey"
                  onClick={() => {
                    console.log(product);
                  }}
                >
                  <Link state={{name:product.name , price:product.price , imgSrc:product.imgSrc}} style={{width:"40%" , textDecoration:'none' ,color:'black'}} to={`/manager/products/${product.name}`}>Delete Proudct</Link>
                </StyledPraimaryButton>
              </StyledButtonContainer>
            </StyledItem>
          );
        })}
    
    // <AddProduct/>
    </StyledFlexContainer>

  );
};

export default AllProducts;
