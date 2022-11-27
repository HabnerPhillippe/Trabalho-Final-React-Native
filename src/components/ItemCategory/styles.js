import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Card = styled.View`
  flex-direction: row;
  background-color: white;
  width: 200px;
  height: 210px;
  //border: 1px solid ${colors.tertiary};
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

export const Photo = styled.Image`
  width: 63%;
  height: 83%;
  margin-top: 10px;
  margin-left: 30px;
`;

export const TextContainer = styled.View`
  width: 135px;
  background-color: none;
  max-width: 300px;
  position: absolute;
  margin-top: 283px;
  margin-left: 27px;
  margin-bottom: 30px;
  margin-right: 10px;
  justify-content: space-between;
  align-items: center;
`;

export const Name = styled.Text`
  color: ${colors.primary};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 15px;
  align-items: right;
  margim-top: 20px;
`;

export const Price = styled.Text`
  color: ${colors.primary};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: red;
  auto-align: center;
  margim-left: 30px;
  margim-right: 50px;
  align-items: center;
`;

export const CustomButton = styled.TouchableOpacity`
  margin: 0 10px 0;
`;

export const ComprarButton = styled.TouchableOpacity`
  background: #2f1313;
  border: 1px solid #ff0000;
  box-sizing: border-box;
  border-radius: 3px;
  opacity: 0.5;
  position: absolute;
  top: 9rem;
  width: 8rem;
  height: 2rem;
  align-self: center;
  left: 30px;
  margin-top: 127px;
  margin-bottom: 100px;
`;

export const ComprarText = styled.Text`
  color: #fff;
  font-family: Sans-serif;
  font-size: 11px;
  font-style: normal;
  align-self: center;
  top: auto;
  bottom: 5px;
  letter-spacing: 0.05em;
  line-height: 24px;
  position: absolute;
`;
