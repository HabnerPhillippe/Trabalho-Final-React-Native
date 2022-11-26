import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Lato } from "@expo-google-fonts/lato";
import { SafeAreaView, Text, Image, View, ImageBackground } from "react-native";
import { ContainerAbout, TextAbout, PhotoAbout, PhotoText } from "./styles";
import { Header } from "../../components/Header/index.js";
import bruna from "../../../assets/bruna.PNG";
import kauan from "../../../assets/kauan.PNG";
import quezia from "../../../assets/quezia.PNG";
import habner from "../../../assets/habner.PNG";
import yuri from "../../../assets/yuri.PNG";
import marca from "../../../assets/marcaDagua.png";
export const AboutUs = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    Lato,
  });
  function goBack() {
    navigation.goBack("Home");
  }
  return (
    <SafeAreaView>
      <Header title={"Sobre nós"} goBack={goBack} iconName={"arrow-back"} />
      <ImageBackground source={marca}>
        <View>
          {"\n"}
          {"\n"}
          {"\n"}
          <TextAbout>
            {"\n"}
            Somos uma equipe de amigos apaixonados pela tecnologia que se formou
            através de um curso de programação. E, temos como propósito com esta
            loja, poder proporcionar a voce nosso cliente experiencias de compra
            tranquilas e com preços diferenciados. È sem duvidas um imenso
            prazer servir aos nossos clientes tudo de novo e do melhor no que se
            refere a área nerd.
            {"\n"}
            {"\n"}
            {"\n"}
          </TextAbout>
        </View>
        {"\n"}
        {"\n"}
        <ContainerAbout>
          <PhotoText>
            Bruna
            <PhotoAbout source={bruna} />
          </PhotoText>
          <PhotoText>
            Kauan
            <PhotoAbout source={kauan} />
          </PhotoText>
          <PhotoText>
            Yuri
            <PhotoAbout source={yuri} />
          </PhotoText>
          <PhotoText>
            Habner
            <PhotoAbout source={habner} />
          </PhotoText>
          <PhotoText>
            Quezia
            <PhotoAbout source={quezia} />
          </PhotoText>
        </ContainerAbout>
      </ImageBackground>
    </SafeAreaView>
  );
};
