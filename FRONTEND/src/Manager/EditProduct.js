import React from 'react'
import { useLocation } from 'react-router-dom'
import {StyledItem, StyledText , StyledImg} from '../shared/StyledDisplayPage'
const EditProduct = () => {
const location = useLocation().state

    return (
    <StyledItem>
        <StyledImg  src={location.imgSrc} />
        <StyledText>{location.name}</StyledText>
        <StyledText>{location.price}</StyledText>
    </StyledItem>
  )
}

export default EditProduct