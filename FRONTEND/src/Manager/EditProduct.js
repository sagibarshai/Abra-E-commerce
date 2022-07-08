import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { StyledPraimaryButton } from '../shared/UIElements/StyledPraimaryButton'
import {StyledItem, StyledText , StyledImg} from '../shared/StyledDisplayPage'
const EditProduct = () => {
const location = useLocation().state
const [name, setName] = useState(location.name) 
const [price, setPrice] = useState(location.price) 
const [quantity, setQuantity] = useState(0) 

const inputHandler = (e , setInputName) => {
setInputName(e.target.value)

}

    return (
      <StyledPage>
    // <StyledItem>
      <StyledForm>
        <StyledImg src={location.imgSrc} />
        <StyledLeabl>name</StyledLeabl>
        <StyledInput type="text" onChange={(e) => {inputHandler(e , setName)}} value={name} />
        <StyledLeabl>price</StyledLeabl>
        <StyledInput type="number" onChange={(e) => {inputHandler(e , setPrice)}} value={price} />
        <StyledLeabl>quantity</StyledLeabl>
        <StyledInput type="number"  onChange={(e) => {inputHandler(e , setQuantity)}} value={quantity}/>
        <StyledPraimaryButton width="50%" height="40px" color="white" backgroundColor="black" hoverBackgroundColor="lightGray" hoverColor="black" border="none" marginTop="20px"  type="submit">Submit</StyledPraimaryButton>
      </StyledForm>
    </StyledItem>
      </StyledPage>
  )
}
const StyledPage = styled.div`
background-color:white ;
`

const StyledForm = styled.form`
width:80%;
margin:0 auto;
display:flex;
flex-direction: column;
row-gap: 10px;
justify-content: center;
align-items: center;
height: 100vh;
`
const StyledLeabl = styled.label`
`

const StyledInput = styled.input`
width:50%;
height:40px;
text-align: center;
font-size:20px;
`
export default EditProduct
