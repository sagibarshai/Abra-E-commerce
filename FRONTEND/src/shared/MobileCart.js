import React from "react";
import { StyledPraimaryButton } from "./UIElements/StyledPraimaryButton";
import {
     StyledMobileCartContainer,
     StyledTitle,
     StyledFlexRowContainer,
     StyledFlexColumnContainer,
     StyledImgContainer,
     StyledImg,
     StyledXButton,
     StyledButtonsContainer,
     StyledButton,
     StyledContainer,
     StyledText,
} from "./StyledMobileCart";
const MobileCart = (props) => {
     return (
          <StyledMobileCartContainer>
               <StyledTitle>My Cart</StyledTitle>
               <StyledContainer>
                    {!props.userId && (
                         <>
                              <StyledImgContainer
                                   width="168px"
                                   height="140px"
                                   center
                              >
                                   <StyledImg
                                        src="/images/emptyCart.png"
                                        width="168px"
                                        height="140px"
                                   />
                              </StyledImgContainer>
                              <StyledText
                                   marginTop="16px"
                                   center
                                   fontSize="14px"
                                   color=" #1a223e"
                              >
                                   Your cart is empty, signup and start shop!
                              </StyledText>
                         </>
                    )}
                    {props.itemsInCart &&
                         !props.itemsInCart.length &&
                         props.userId && (
                              <>
                                   <StyledImgContainer
                                        width="168px"
                                        height="140px"
                                        center
                                   >
                                        <StyledImg
                                             src="/images/emptyCart.png"
                                             width="168px"
                                             height="140px"
                                        />
                                   </StyledImgContainer>
                                   <StyledText
                                        marginTop="16px"
                                        center
                                        fontSize="14px"
                                        color=" #1a223e"
                                   >
                                        Your cart is empty
                                   </StyledText>
                              </>
                         )}
                    <StyledFlexRowContainer justifayContent="center">
                         {props.itemsInCart &&
                              props.itemsInCart.map((item, index) => {
                                   return (
                                        <StyledFlexColumnContainer key={index}>
                                             <StyledImgContainer
                                                  width="125px"
                                                  height="125px"
                                                  position="relative"
                                             >
                                                  <StyledImg
                                                       src={item.imgSrc}
                                                       width="125px"
                                                       height="125px"
                                                  />
                                                  <StyledXButton
                                                       onClick={() => {
                                                            props.deleteItemHandler(
                                                                 item
                                                            );
                                                       }}
                                                  >
                                                       X
                                                  </StyledXButton>
                                             </StyledImgContainer>
                                             <StyledText
                                                  color="black"
                                                  fontSize="16px"
                                             >
                                                  {item.name}
                                             </StyledText>
                                             <StyledText
                                                  color="#808285"
                                                  fontSize="14px"
                                             >
                                                  {item.price} ILS
                                             </StyledText>
                                             <StyledButtonsContainer>
                                                  <StyledButton
                                                       onClick={() => {
                                                            props.decreseQtyByOneHandler(
                                                                 item
                                                            );
                                                       }}
                                                  >
                                                       -
                                                  </StyledButton>
                                                  <StyledText
                                                       color="#808285"
                                                       fontSize="16px"
                                                  >
                                                       {item.cartQty}
                                                  </StyledText>
                                                  <StyledButton
                                                       onClick={() => {
                                                            props.increseQtyByOneHandler(
                                                                 item
                                                            );
                                                       }}
                                                  >
                                                       +
                                                  </StyledButton>
                                             </StyledButtonsContainer>
                                        </StyledFlexColumnContainer>
                                   );
                              })}
                    </StyledFlexRowContainer>
                    <StyledFlexRowContainer
                         marginTop="28px"
                         justifayContent="space-between"
                    >
                         {props.itemsInCart && props.itemsInCart.length !== 0 && (
                              <>
                                   <StyledText>Subtotal</StyledText>
                                   <StyledText>
                                        {props.totalPrice}ILS
                                   </StyledText>
                              </>
                         )}
                    </StyledFlexRowContainer>
                    <StyledPraimaryButton
                         backgroundColor="#808080"
                         width="100%"
                         border="none"
                         color="white"
                         marginTop="8px"
                         hoverBackgroundColor="black"
                    >
                         CHECKOUT
                    </StyledPraimaryButton>
               </StyledContainer>
          </StyledMobileCartContainer>
     );
};
export default MobileCart;
