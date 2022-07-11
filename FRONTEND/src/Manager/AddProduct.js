import React, {useState} from "react";
import styled from "styled-components";
import axios from 'axios'
import { StyledPraimaryButton } from "../shared/UIElements/StyledPraimaryButton";
<<<<<<< HEAD
import {useNavigate} from 'react-router-dom'
=======
>>>>>>> implement-manager-api
const AddProduct = () => {
  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [imgSrc,setImgSrc] = useState('')
  const [price,setPrice] = useState('')
  const [quantity,setQuantity] = useState(5)
  const [types,setTypes] = useState([])
  const [errors,setErrors] = useState([]) 
<<<<<<< HEAD
=======
  console.log(errors)
>>>>>>> implement-manager-api
  const onSubmitHandler = (e) => {
    let errorsArray = []
    e.preventDefault()
    if(name.length <2) {
      errorsArray.push(`name filed contain at least 2 characters`)
    }
    if(imgSrc.length <=10) {
       errorsArray.push(`image src filed must contain at least 10 characters`)
    }
    if(price <= 0 || !price) {
      errorsArray.push(`price filed must be above 0 !`)
    }
    if(quantity <= 0 || !quantity) {
      errorsArray.push(`quantity field must be above 0 !`)
    }
    if(types.length <= 0) {
      errorsArray.push(`you must choose at least 1 type`)
    }
    setErrors(errorsArray)
    if(errorsArray.length === 0) {
      const data = {name , price  , imgSrc ,quantity , types}
      axios.put(process.env.REACT_APP_BACKEND_URL + '/manager/add-product' , data)
<<<<<<< HEAD
      .then(res => navigate('/manager/products')
      )
=======
      .then(res => console.log(res))
>>>>>>> implement-manager-api
      .catch(err => console.log(err))
    }
    }

const checkboxHandler = (id,value) => {
  if(document.getElementById(id).checked)  setTypes([...types , document.getElementById(id).value])
  else {
    let newCheckboxState= [...types].filter(type => type !== value)
    setTypes(newCheckboxState)
  }
}
  return (
    <StyledPage>
    <StyledForm onSubmit={(e) => onSubmitHandler(e)}>
      {errors.length > 0 && <StyledLeabl>{errors.length} errors found</StyledLeabl>}
      {errors.length > 0 && errors.map((error, idx) => {
        return <StyledLeabl key={idx}>{error} <br></br></StyledLeabl>
      })}
      <StyledLeabl htmlFor="name">Name</StyledLeabl>
      <StyledInput value={name} onChange={(e)=> {setName(e.target.value)}} placeholder="name" id="name" />
      <StyledLeabl htmlFor="imageUrl">image Url</StyledLeabl>
      <StyledInput value={imgSrc} onChange={(e)=> {setImgSrc(e.target.value)}} placeholder="image Url" id="imageSrc" />
      <StyledLeabl htmlFor="price">price</StyledLeabl>
      <StyledInput type="number" value={price} onChange={(e)=> {setPrice(e.target.value)}} placeholder="price" id="price" />
      <StyledLeabl htmlFor="quantity">quantity</StyledLeabl>
      <StyledInput type="number" value={quantity} onChange={(e)=> {setQuantity(e.target.value)}} placeholder="quantity" id="quantity" />
     <StyledLeabl>What are the types for this product?</StyledLeabl>
      <StyledCheckboxContainer>
      <StyledLeabl>Best Sellers</StyledLeabl>
      <StyledCheckBox onClick={() => {
        checkboxHandler("Best_Sellers" , "Best_Sellers")
      }} id="Best_Sellers" value="Best_Sellers" type="checkbox" />
      <StyledLeabl>Home</StyledLeabl>
      <StyledCheckBox onClick={() => {
        checkboxHandler('Home' , 'Home')
      }} id="Home" value="Home" type="checkbox"/>
      <StyledLeabl>Office</StyledLeabl>
      <StyledCheckBox onClick={() => {
        checkboxHandler('Office' , 'Office')
      }} id="Office" value="Office" type="checkbox"/>
      <StyledLeabl>Sport</StyledLeabl>
      <StyledCheckBox onClick={() => {
        checkboxHandler('Sport' , 'Sport')
      }} id="Sport" value="Sport" type="checkbox"/>
      <StyledLeabl>Clothing</StyledLeabl>
      <StyledCheckBox onClick={() => {
        checkboxHandler('Clothing' , 'Clothing')
      }} id="Clothing" value="Clothing" type="checkbox"/>

    </StyledCheckboxContainer>
      <StyledPraimaryButton height="50px" backgroundColor="black" color="white" hoverBackgroundColor="white" hoverColor="black" border="none" boxShadow="2px 2px 2px solid black" width="50%" type="submit">Add</StyledPraimaryButton>
    </StyledForm>
    </StyledPage>
  );
};
  const StyledPage = styled.div`
  width:100vw;
  background-color: white;
`;
const StyledCheckboxContainer = styled.div`
display: flex;
flex-direction: row;
column-gap: 15px;
`
const StyledCheckBox = styled.input`
width: 15px;
height:15px;

&:checked{
color:black;
background-color: black;
}
`
const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const StyledLeabl = styled.label`
font-size:20px;
`;

const StyledInput = styled.input`
  width: 50%;
  height: 40px;
  text-align: center;
  font-size: 20px;
  padding: 0%;
  margin:0;
  `;

export default AddProduct;
