import React,{useContext} from "react";
import { Text, View } from "react-native";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { CartContext } from "../../context/Cart";
import { Button } from "react-native-paper";
import { Carrinho } from "../../components/Cart/index.js";

export const Cart = () => {
  const navigation = useNavigation();

 

  const data = [
    {
      id: `1`,
      name: "title 1",
      price: 100,
    },
    {
      id: `2`,
      name: "title 2",
      price: 200,
    },
  ];

  return (
    <MainContainer>
      <Carrinho/>     
    </MainContainer>
  );
};
