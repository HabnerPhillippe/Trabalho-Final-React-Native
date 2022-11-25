import { EmailInput, MarcaDagua, NewPassButton, TextButton, TextEmail} from "./styles";
import { Header } from "../../components/Header/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import marcaDagua from "../../../assets/marcaDagua.png";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const ForgotPass=()=> {
    const [email, setEmail] = useState("");

    const navigation = useNavigation();

    const recover = () => {alert(email)};

    function goBack() {
      navigation.goBack();
    };

  return (
    <MainContainer>
      <Header title={"Esqueci Minha Senha"} iconName={"arrow-back"} goBack={goBack} />
      <MarcaDagua source={marcaDagua} />
      <TextEmail>Digite seu e-mail de cadastro</TextEmail>
       <EmailInput
        autoFocus={true}
        keyboardType={"email.adress"}
        onChangeText={(t) => setEmail(t)}
        onEndEditing={() => this.passTextInput.focus()}
        placeholder={"E-mail"}
        placeholderposition={"center"}
        placeholderTextColor={"gray"}
        returnKeyType={"go"}
       />
       <NewPassButton onPress={() => {
        alert("Te enviamos um e-mail para troca de senha!");
        navigation.navigate("Login")}}>
        <TextButton>ENVIAR</TextButton></NewPassButton>

    </MainContainer>
  )
}