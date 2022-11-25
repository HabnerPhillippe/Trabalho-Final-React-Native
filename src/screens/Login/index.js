import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import logoLogin from "../../../assets/logoLogin.png";
import { Gradient } from "../../components/Gradient";
import { Api } from "../../services";
import {
  ContainerLogin,
  EmailInput,
  ForgotPass,
  LoginButton,
  LoginText,
  Logo,
  PassInput,
  TouchablePass
} from "./styles";

export const Login = () => {
  const [user, setUser] = useState({
    login: " ",
    pass: " ",
  });
  const navigation = useNavigation();

  const screenCreateAccount = () => {
    navigation.navigate("CreateAccount");
  };
  const logar = () => {
    console.log("logando")


    Api.get(`usuario/login?login=${user.login}&senha=${user.pass}`)
       .then((res) => {
        if(res.data !== "Login e/ou senha inválidos.") {

            navigation.navigate("Home")
            console.log("logou")
        }
        else{


          alert("errou") 
        }
       }).catch((err) => {
        console.log(err)
       });



};

  return (
    <ContainerLogin>
      <Gradient />
      <Logo source={logoLogin} />
      <EmailInput
        onChangeText={(Text) => setUser({ ...user, login: Text })}
        placeholder={"E-mail"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
      ></EmailInput>
      <PassInput
        onChangeText={(Text) => setUser({ ...user, pass: Text })}
        placeholder={"Senha"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
      ></PassInput>
      <TouchablePass>
        {/*<MaterialIcons name="email" size={24} color="black" />*/}
        <ForgotPass onPress={() => navigation.navigate("ForgotPass")}>
          Esqueceu a senha?
        </ForgotPass>
      </TouchablePass>
      <LoginButton onPress={logar}>
        <LoginText>ENTRAR</LoginText>
      </LoginButton>
      <TouchableOpacity onPress={screenCreateAccount}>
        <Text style={{ color: "#FFFF" }}>Não tem conta? Cadastre-se!</Text>
      </TouchableOpacity>
    </ContainerLogin>
  );
};
