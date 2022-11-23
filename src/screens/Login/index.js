import {
  ContainerLogin,
  EmailInput,
  ForgotPass,
  LoginButton,
  LoginText,
  Logo,
  PassInput,
  TouchablePass,
} from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

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
        <LoginText>ENTRAR</LoginText>
      </LoginButton>
    </ContainerLogin>
  );
};
