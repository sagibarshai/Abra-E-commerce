import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { StyledPraimaryButton } from "../shared/UIElements/StyledPraimaryButton";
import { StyledItem, StyledText, StyledImg } from "../shared/StyledDisplayPage";
import { useNavigate } from "react-router-dom";
const TYPES_DATA = [
  {
    name: "Best_Sellers",
    value: "Best_Sellers",
    id: "Best_Sellers",
    isChecked: false,
  },
  { name: "Home", value: "Home", id: "Home", isChecked: false },
  { name: "Sport", value: "Sport", id: "Sport", isChecked: false },
  { name: "Office", value: "Office", id: "Office", isChecked: false },
  { name: "Clothing", value: "Clothing", id: "Clothing", isChecked: false },
];
const EditProduct = () => {
  const navigate = useNavigate();
  const location = useLocation().state;
  const [price, setPrice] = useState(location.price || "");
  const [name, setName] = useState(location.name || "");
  const [quantity, setQuantity] = useState(location.quantity || 5);
  const [types, setTypes] = useState(location.types || []);
  const [typesData, setTypesData] = useState(TYPES_DATA);
  console.log(location)
  const inputHandler = (e, setInputName) => {
    setInputName(e.target.value);
  };
  const allTypesArr = ["Best_Sellers", "Home", "Sport", "Office", "Clothing"];

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const { imgSrc } = location;
    let selectedTypes = [];
    typesData.map((type) => {
      if (type.isChecked) selectedTypes.push(type.value);
    });
    const formData = {
      name,
      price,
      imgSrc,
      quantity,
      types: selectedTypes,
    };
    axios
      .put(process.env.REACT_APP_BACKEND_URL + "/manager/edit-product", {
        formData,
      })
      .then((res) => {
        navigate("/manager/products");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    let newStateArr = [];
    allTypesArr.map((type, index) => {
      if (types.includes(type)) {
        console.log(typesData[index]);
        newStateArr.push({ ...typesData[index], isChecked: true });
      } else newStateArr.push({ ...typesData[index], isChecked: false });
    });
    setTypesData(newStateArr);
  }, []);
  console.log(typesData);
  const checkboxHandler = (id, value) => {
    if (document.getElementById(id).checked) {
      const newObj = typesData.find((type) => type.value === value);
      if (newObj) {
        let types = [...typesData];
        const newObjIndex = typesData.findIndex((type) => type.value === value);
        let newObjState = { ...newObj, isChecked: true };
        console.log(newObjState);
        types[newObjIndex] = newObjState;
        setTypesData(types);
      }
    } else {
      const newObj = typesData.find((type) => type.value === value);
      if (newObj) {
        let types = [...typesData];
        const newObjIndex = typesData.findIndex((type) => type.value === value);
        let newObjState = { ...newObj, isChecked: false };
        types[newObjIndex] = newObjState;
        setTypesData(types);
      }
    }
  };
  return (
    <StyledPage>
      <StyledItem>
        <StyledForm onSubmit={formSubmitHandler}>
          <StyledImg src={location.imgSrc} />
          <StyledLeabl>name</StyledLeabl>
          <StyledInput
            type="text"
            onChange={(e) => {
              inputHandler(e, setName);
            }}
            value={name}
          />
          <StyledLeabl>price</StyledLeabl>
          <StyledInput
            type="number"
            onChange={(e) => {
              inputHandler(e, setPrice);
            }}
            value={price}
          />
          <StyledLeabl>quantity</StyledLeabl>
          <StyledInput
            type="number"
            onChange={(e) => {
              inputHandler(e, setQuantity);
            }}
            value={quantity}
          />

          <StyledLeabl>What are the types for this product?</StyledLeabl>
          <br></br>
          <StyledCheckboxContainer>
            {typesData.map((type, index) => {
              return (
                <div key={type.name}>
                  <StyledLeabl>{type.name}</StyledLeabl>
                  <StyledCheckBox
                    id={type.value}
                    value={type.type}
                    checked={type.isChecked}
                    type="checkbox"
                    onChange={() => {
                      checkboxHandler(type.value, type.value);
                    }}
                  />
                </div>
              );
            })}
          </StyledCheckboxContainer>
          <StyledPraimaryButton
            width="50%"
            height="40px"
            color="white"
            backgroundColor="black"
            hoverBackgroundColor="lightGray"
            hoverColor="black"
            border="none"
            marginTop="20px"
            type="submit"
          >
            Submit
          </StyledPraimaryButton>
        </StyledForm>
      </StyledItem>
    </StyledPage>
  );
};
const StyledPage = styled.div`
  background-color: white;
`;

const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StyledLeabl = styled.label``;

const StyledInput = styled.input`
  width: 50%;
  height: 40px;
  text-align: center;
  font-size: 20px;
`;

const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
`;
const StyledCheckBox = styled.input`
  width: 15px;
  height: 15px;

  &:checked {
    color: black;
    background-color: black;
  }
`;

export default EditProduct;
