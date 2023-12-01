import styled from "styled-components";

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartHeader = styled.h1`
    color: #8b1ec4;
`;

export const DeskImage = styled.img`
  width: 200px;
  border-radius: 20px;
`

export const ItemInCart = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-top: 10px;
`

export const ItemName = styled.h2`
  margin-left: 60px;
  color: darkviolet;
`;

export const Price = styled.div`
  margin-left: 30px;
  color: darkviolet;
  font-size: 20px;
`

export const TotalPrice = styled.p`
  margin-left: 67%;
  font-size: 20px;
  font-weight: 600;
  color: #8b1ec4;
`;
export const DataButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 430px;
`

export const DeskCount = styled.p`
  margin: 10px;
  margin-right: 13px;
  color: violet;
  border-bottom: 1px solid;
`;
export const AddAndSubtract = styled.a`
  text-decoration: none;
  padding: 8px 17px;
  border-radius: 7px;
  border: 2px solid darkviolet;
  color: darkviolet;
  font-size: 20px;
  margin-right: 5px;
`;

export const CartButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px;
  align-items: center;
  margin-bottom: 10px;
`

export const DataList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`