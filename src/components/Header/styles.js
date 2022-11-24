import styled from "styled-components/native";

export const Container = styled.View`
  align-self: flex-start;
  width: 100%;
  border-left-width: 150%;
  height: 75px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
  background-color: red;
`;

export const TitleContainer = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 25px;
`;

export const Logo = styled.Image`
  width: 85;
  height: 85;
`;
