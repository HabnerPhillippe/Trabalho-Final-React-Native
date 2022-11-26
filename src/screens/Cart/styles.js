import styled from "styled-components/native";

export const Container = styled.View`
height: 100%;
width: 100%;
`;

export const ButtonText = styled.Text`
  align-self: center;
  color: #ffff;
  font-family: sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600px;
  height: 19px;
  letter-spacing: 0.05em;
  line-height: 24px;
  position: absolute;
  top: 20%;
  width: 92px;
`;

export const BuyButton = styled.TouchableOpacity`
  bottom: 50px;
  background: #2f1313;
  border: 1px solid #ff0000;
  border-radius: 3px;
  box-sizing: border-box;
  height: 35px;
  opacity: 0.5;
  position: absolute;
  align-items: center;
  right: 10%;
  width: 100px;
  top: 90%;
`;

export const TextBuy = styled.Text`
  color: #000;
  font-family: Inter;
  font-size: 70%;
  font-style: normal;
  font-weight: 500px;
  letter-spacing: 0.05px;
  line-height: 16px;
  position: absolute;
  bottom: 11rem;
  right: 10%;
  top: 87%;
`;

export const RemoveItemButton = styled.TouchableOpacity`
left:70%;
`

export const AddRemove = styled.View`
  flex-direction: row;
  space-between: middle;

`

export const Resume = styled.View`
position:absolute;
bottom:3rem;
left:2rem
`

export const ProductContainer = styled.View`
top:1rem;
padding-left: 1rem;
border: 1px solid black;
`

export const TrashButton = styled.TouchableOpacity`
left:90%;
`

export const NoItems = styled.Text`
margin-left:20px;
margin-top:10px;
`