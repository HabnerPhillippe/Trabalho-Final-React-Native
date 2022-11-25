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
  left: 25px;
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
  right: 10%;
  width: 100px;
  top: 90%;
`;

export const MarcaDagua = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
`;

export const TextBuy = styled.Text`
  color: #000;
  font-family: Inter;
  font-size: 90%;
  font-style: normal;
  font-weight: 300px;
  letter-spacing: 0.05px;
  line-height: 16px;
  position: absolute;
  bottom: 10rem;
  right: 10%;
  top: 87%;
`;