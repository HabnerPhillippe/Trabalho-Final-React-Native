import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Card = styled.View`
  flex-direction: row;
  //background-color: ${colors.secondary};
  width: 180px;
  height: 160px;
  //border: 1px solid ${colors.tertiary};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Photo = styled.Image`
  width: 100px;
  height: 70px;
  margin: 0px 0px 70px 30px;
  border: 1px solid ${colors.primary};
`;

export const TextContainer = styled.View`
  width: 70px;
  position: absolute;
  margin: 60px 60px 20px;
`;

export const Name = styled.Text`
  color: ${colors.primary};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 14px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    position: absolute;
    bottom: 10px;
    right: 50px;
`;

export const CustomButton = styled.TouchableOpacity`
  margin: 0 10px 0;
`;

export const Valor = styled.Text`
`;
