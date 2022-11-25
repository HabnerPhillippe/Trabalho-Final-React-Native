import colors from "../../themes/colors.js";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  align-self: flex-start;
  background-color: ${colors.secondary};
  border-radius: 5px;
  height: 67px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px 0 10px;
  width: 100%;
`;

export const Logo = styled.Image`
  height: 125px;
  top: 7px;
  width: 125px;
`;
  
export const Title = styled.Text`
  border-bottom-width: 2px;
  color: ${colors.primary};
  font-family: sans-serif;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const TitleContainer = styled.View`
  margin-left: 20px;
`;