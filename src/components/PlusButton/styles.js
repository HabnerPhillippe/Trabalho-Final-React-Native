import styled from "styled-components/native";
import colors from "../../themes/colors.js";

export const ViewButton = styled.View`
  align-items: center;
  background-color: ${colors.viewButtonColor};
  width:395px;
  height: 70px;
  margin-bottom: 50px;
`;
export const TitleContainer = styled.View`
  margin-right: 280px;
  height:4px;
  width:46px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  width: 120px;
  margin-top: 1px;
  margin-left: 95px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;