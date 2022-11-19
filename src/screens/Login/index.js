import { View, Text } from 'react-native'
import React from 'react'
import { MainContainer } from "../../components/MainContainer/styles.js";
import { useNavigation } from "@react-navigation/native";

export const Login = ()=> {

    const navigation = useNavigation();

  return (
    <MainContainer>
      <Text>index</Text>
    </MainContainer>
  )
}