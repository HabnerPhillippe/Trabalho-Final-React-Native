import { EmailInput} from "./styles";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const ForgotPass=()=> {
    const [email, setEmail] = useState("");

    const navigation = useNavigation();

    const recover = () => {alert(email)};
  return (
    <View>
    <Text>Recuperar Senha</Text>
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
    </View>
  )
}