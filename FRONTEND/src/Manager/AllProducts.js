import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledItem,
  StyledFlexContainer,
  StyledText,
  StyledImg,
  StyledTitle,
  StyledMainContainer
} from "../shared/StyledDisplayPage";
import { Link } from "react-router-dom";
import { StyledPraimaryButton } from "../shared/UIElements/StyledPraimaryButton";
const AllProducts = (props) => {
  const [productsFromDb, setProductsFromDb] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + "/products")
      .then((res) => {
        setProductsFromDb(res.data[0].items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <StyledMainContainer marginTop="0px">

    <StyledFlexContainer>
      {productsFromDb.length > 0 &&
        productsFromDb.map((product, index) => {
          return (
            <StyledItem width="25%" key={index} style={{ maxWidth: "450px"  }}>
              <StyledImg
                width="80%"
                height="80%"
                style={{ maxWidth: "300px" }}
                src={product.imgSrc}
              />
              <StyledText>{product.name}</StyledText>
              <StyledText>{product.price} ILS</StyledText>
              <Link
                state={{
                  name: product.name,
                  price: product.price,
                  imgSrc: product.imgSrc,
                  quantity: product.cartQty,
                  types: product.types,
                }}
                style={{
                  textAlign: "center",
                  width: "100%",
                  textDecoration: "none",
                  color: "white",
                }}
                to={`/manager/products/edit/${product.name}`}
              >
                <StyledPraimaryButton
                  hoverBackgroundColor="lightgray"
                  hoverColor="black"
                  marginTop="20px"
                  width="85%"
                  backgroundColor="black"
                  color="white"
                  border="2px solid lightgrey"
                >
                  Edit
                </StyledPraimaryButton>
              </Link>

              <Link
                state={{
                  name: product.name,
                  price: product.price,
                  imgSrc: product.imgSrc,
                  quantity: product.cartQty,
                  types: product.types,
                }}
                style={{
                  textAlign: "center",
                  width: "100%",
                  textDecoration: "none",
                  color: "white",
                }}
                to={`/manager/products/delete/${product.name}`}
              >
                <StyledPraimaryButton
                  hoverBackgroundColor="lightgray"
                  hoverColor="black"
                  marginTop="20px"
                  width="85%"
                  backgroundColor="black"
                  color="white"
                  border="2px solid lightgrey"
                >
                  Delete
                </StyledPraimaryButton>
              </Link>
            </StyledItem>
          );
        })}
    </StyledFlexContainer>
    </StyledMainContainer>
  );
};

export default AllProducts;
