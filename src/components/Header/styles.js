import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const Container = styled.View`
  align-self: flex-start;
  width: 101%;
  border-left-width: 150%;
  height: 75px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
  align-items: center;
  background-color: ${colors.viewButtonColor};
`;

export const TitleContainer = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
  border-bottom-width: 1px;
`;

export const Logo = styled.Image`
  width: 85px;
  height: 85px;
`;
