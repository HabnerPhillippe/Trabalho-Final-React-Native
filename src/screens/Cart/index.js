import React,{useContext} from "react";
import { Text, View } from "react-native";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { CartContext } from "../../context/Cart";
import { Button } from "react-native-paper";
import { Carrinho } from "../../components/Cart/index.js";
import { Header } from "../../components/Header/index.js";
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
