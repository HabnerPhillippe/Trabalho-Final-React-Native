import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Card = styled.View`
  flex-direction: row;
  //background-color: ${colors.secondary};
  width: 180px;
  height: 250px;
  //border: 1px solid ${colors.tertiary};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Photo = styled.Image`
  width: 130px;
  height: 90px;
  margin: 0px 0px 160px 30px;
  border: 1px solid ${colors.primary};
`;

export const TextContainer = styled.View`
  width: 130px;
  position: absolute;
  top: 90px;
  right: 20px;
`;

export const Name = styled.Text`
  color: ${colors.primary};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 12px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 44px;
    right: 50px;
`;

export const CustomButton = styled.TouchableOpacity`
  margin: 0 10px 0;
`;

export const Valor = styled.Text`
`;

export const ComprarButton = styled.TouchableOpacity`
  background: #2f1313;
  border: 1px solid #ff0000;
  box-sizing: border-box;
  border-radius: 3px;
  opacity: 0.5;
  position: absolute;
  bottom: 5rem;
  width: 8rem;
  height: 2rem;
  align-self: center;
  left: 30px;
`;

export const ComprarText = styled.Text`
  color: #fff;
  font-family: Sans-serif;
  font-size: 10px;
  font-style: normal;
  align-self: center;
  top: auto;
  bottom: 5px;
  letter-spacing: 0.05em;
  line-height: 24px;
  position: absolute;
  
`;
