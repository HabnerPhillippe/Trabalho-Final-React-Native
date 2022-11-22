import { SafeAreaView, TouchableOpacity } from "react-native";
import {
  EmailInput,
  ForgotPass,
  LoginButton,
  Logo,
  PassInput,
  TextButton,
  ContainerLogin,
  TouchablePass,
  LoginText,
} from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Login = () => {
  const [user, setUser] = useState({
    email: " ",
    pass: " ",
  });
  const navigation = useNavigation();

  return (
    <ContainerLogin>
      <Gradient />
      <Logo source={logo} />
      <EmailInput
        onChangeText={setUser}
        placeholder={"E-mail"}
        style={{textAlign: "center", color: "white", borderBottom: "1px solid #000000"}}
      ></EmailInput>
      <PassInput
        onChangeText={setUser}
        placeholder={"Senha"}
        style={{textAlign: "center", color: "white", borderBottom: "1px solid #000000"}}    
      ></PassInput>
      <TouchablePass>
      <MaterialIcons name="email" size={24} color="black" />
        <ForgotPass onPress={()=>navigation.navigate("ForgotPass")}>Esqueceu a senha?</ForgotPass>
      </TouchablePass>
      <LoginButton onPress={() => navigation.navigate("Home")}>
        <LoginText>LOGIN</LoginText>
      </LoginButton>
    </ContainerLogin>
  );
};
