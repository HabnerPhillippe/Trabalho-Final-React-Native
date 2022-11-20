import { Button, Image, SafeAreaView, Text, TextInput } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { style } from "./styles.js";

export const Login = ()=> {

    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Image
        source={require("../../../assets/logo.png")}
        style={style.logo}
      />

      <TextInput
        style={style.emailLine}
        placeholder="E-mail">
      </TextInput>
      <TextInput
      style={style.passLine}
        placeholder="Senha">
      </TextInput>
      <Text style={style.forgotPass}
      >Esqueceu a senha?</Text>

      <Button
        style={style.loginClick}
        title="ENTRAR"
      />
    </SafeAreaView>
  )
}