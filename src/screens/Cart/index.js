import { ButtonText, BuyButton, MarcaDagua, TextBuy } from "./styles";
import { Carrinho } from "../../components/Cart/index.js";
import { CartContext } from "../../context/Cart";
import { FlatList } from "react-native-gesture-handler";
import { Header } from "../../components/Header/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import marcaDagua from "../../../assets/marcaDagua.png";
import React,{useContext} from "react";
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
      <MarcaDagua source={marcaDagua} />
      <TextBuy>Finalizar pedido</TextBuy>
      <BuyButton onPress={() => {
        alert("Pedido Finalizado!");
        navigation.navigate("Home")}}>
        <ButtonText>Comprar</ButtonText>
      </BuyButton>   
    </MainContainer>
  );
};
