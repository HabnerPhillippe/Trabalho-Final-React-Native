import styled from "styled-components/native";

export const ContainerAbout = styled.View`
  display: flex;
  background-color: none;
  justify-align: space-around;
  align-items: right;
  flex-direction: row;
  height: 50%;
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  gap: 2.6%;
`;

export const TextAbout = styled.Text`
  color: black;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 300px;
  allign-items: center;
`;
export const PhotoAbout = styled.Image`
  height: 100%;
  width: 60px;
  max-height: 200px;
  max-width: 300px;
`;

export const PhotoText = styled.Text`
  color: black;
  font-family: Inter_900Black;
  font-size: 14px;
  font-style: italic;
  font-weight: 100px;
  allign-items: right;
`;
