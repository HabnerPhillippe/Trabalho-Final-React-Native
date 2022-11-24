import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EmailInput, PassInput} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ContainerCadastro } from "../CreateAccount/styles";
import { ContainerLogin } from "../Login/styles";
import { ContainerSplash } from "../Splash/styles";
import { Gradient } from "../../components/Gradient";
import { Ionicons } from "@expo/vector-icons";
export const ForgotPass = () => {
  const [email, setEmail] = useState("");

  const navigation = useNavigation();

  const recover = () => {
    alert(email);
  };

  function goBack() {
    navigation.goBack();
  };

  return (
    <ContainerSplash>
      <Gradient />
      <TouchableOpacity onPress={goBack}>
          <Ionicons name={"arrow-back"} color={"white"} size={35} />
      </TouchableOpacity>  
      <EmailInput
        autoFocus={true}
        keyboardType={"email.adress"}
        onChangeText={(t) => setEmail(t)}
        onEndEditing={() => this.passTextInput.focus()}
        placeholder={"Login"}
        placeholderposition={"center"}
        returnKeyType={"go"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
      />
      <PassInput
        onChangeText={(Text) => setUser({ ...user, pass: Text })}
        placeholder={"Nova Senha"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
      ></PassInput>
    </ContainerSplash>
  );
};
