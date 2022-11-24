import { Button } from "react-native-paper";
import { Carrinho } from "../../components/Cart/index.js";
import { CartContext } from "../../context/Cart";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import React,{useContext} from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const Cart = () => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  };

  return (
    <MainContainer>
      <Header title={"Carrinho"} iconName={"arrow-back"} goBack={goBack} />
      <Carrinho/>     
    </MainContainer>
  );
};
