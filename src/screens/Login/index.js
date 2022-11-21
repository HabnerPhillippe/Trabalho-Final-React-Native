import { SafeAreaView, TouchableOpacity } from "react-native";
import { EmailInput, ForgotPass, LoginButton, Logo, PassInput, TextButton } from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import React, { useState} from "react";
import { useNavigation } from "@react-navigation/native";

export const Login = ()=> {

  const [user, setUser] = useState({
    email: " ",
    pass: " ",
  });
  const navigation = useNavigation();


  return (
    <SafeAreaView>
      <Gradient />
      <Logo
        source={logo}
      />
      <EmailInput
        value={user.email}
        onChangeText={setUser}
        placeholder={"E-mail"}
        placeholderposition={"center"}
        placeholderTextColor={"gray"}
      />
      <PassInput
        value={user.pass}
        onChangeText={setUser}
        placeholder={"Senha"}
        placeholderposition={"center"}
        placeholderTextColor={"gray"}
      />
      <TouchableOpacity>
        <ForgotPass>Esqueceu a senha?</ForgotPass> 
      </TouchableOpacity>
      <LoginButton>
        <TextButton>ENTRAR</TextButton>
      </LoginButton>
    </SafeAreaView>
  )
}