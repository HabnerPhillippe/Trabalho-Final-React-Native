import { SafeAreaView, TouchableOpacity} from "react-native";
import {
  EmailInput,
  ForgotPass,
  LoginButton,
  Logo,
  PassInput,
  TextButton,
  ContainerLogin,
  TouchablePass,
} from "./styles";
import { Gradient } from "../../components/Gradient";
import logo from "../../../assets/logo.png";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons'; 



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
        value={user.email}
        onChangeText={setUser}
        placeholder={"E-mail"}
        placeholderposition={"center"}
        placeholderTextColor={"gray"}
      >
      </EmailInput>
      <PassInput
        value={user.pass}
        onChangeText={setUser}
        placeholder={"Senha"}
        placeholderposition={"center"}
        placeholderTextColor={"#00000"}
      ></PassInput>
      <TouchablePass>
        <ForgotPass>Esqueceu a senha?</ForgotPass>
      </TouchablePass>
      <LoginButton>
        <TextButton>ENTRAR</TextButton>
      </LoginButton>
    </ContainerLogin>
  );
};
