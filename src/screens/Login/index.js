import {
  ContainerLogin,
  EmailInput,
  ForgotPass,
  LoginButton,
  LoginText,
  Logo,
  NewUser,
  PassInput,
  TouchablePass,
} from "./styles";
import { Gradient } from "../../components/Gradient";
import { Ionicons } from "@expo/vector-icons";
import logoLogin from "../../../assets/logoLogin.png";
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
      <Logo source={logoLogin} />
      <EmailInput
        onChangeText={setUser}
        placeholder={"E-mail"}
        style={{textAlign: "center", color: "#D9D9D9", borderBottom: "1px solid #000000"}}
      ></EmailInput>
      <PassInput
        onChangeText={setUser}
        placeholder={"Senha"}
        style={{textAlign: "center", color: "#D9D9D9", borderBottom: "1px solid #000000"}}    
      ></PassInput>
      <TouchablePass>
      {/*<MaterialIcons name="email" size={24} color="black" />*/}
        <ForgotPass onPress={()=>navigation.navigate("ForgotPass")}>Esqueceu a senha?</ForgotPass>
        <NewUser onPress={()=>navigation.navigate("CadastroUser")}>Ainda não possui cadastro?</NewUser>
      </TouchablePass>
      <LoginButton onPress={() => navigation.navigate("Home")}>
        <LoginText>ENTRAR</LoginText>
      </LoginButton>
    </ContainerLogin>
  );
};