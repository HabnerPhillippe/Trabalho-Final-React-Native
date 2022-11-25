import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Gradient } from "../../components/Gradient";
import { Api } from "../../services";
import { TouchableOpacity } from "react-native"
import { CadastroText, ContainerCadastro, ContCadastro, LoginButton, Logo, TextoInput } from "./styles";
import { Ionicons } from "@expo/vector-icons";

const CreateAccount = () => {
  const [apiResponse, setApiResponse] = useState();
  const [error, setError] = useState();
  const [user, setUser] = useState({
    cpf: "",
    dtNascimento: "",
    foto: "",
    login: "",
    nome: "",
    senha: "",
  });
  const navigation = useNavigation();
  const cadastro = () => {

    Api.post("/usuario", {
      ativo: true,
      cpf: user.cpf,
      dtNascimento: user.dtNascimento,
      foto: user.foto,
      login: user.login,
      nome: user.nome,
      senha: user.senha,
    })
      .then((response) => {
        setApiResponse(response);
        navigation.navigate("Login");
        console.log(response);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
    console.log(user);
  };

  function goBack() {
    navigation.goBack();
  };

  return (
    <ContainerCadastro>
      <Gradient />
      <TouchableOpacity onPress={goBack}>
          <Ionicons name={"arrow-back"} color={"white"} size={35} />
      </TouchableOpacity>  
      <Logo source={logo} />
      <ContCadastro> 
      <TextoInput
        placeholder={"E-mail"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
        defaultValue={user.nome}
        onChangeText={(Text) => setUser({ ...user, nome: Text })}
      />
      <TextoInput
        placeholder={"CPF" }
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
        defaultValue={user.cpf}
        onChangeText={(Text) => setUser({ ...user, cpf: Text })}
      />
      <TextoInput
          placeholder={"1999-01-01"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
        defaultValue={user.dtNascimento}
        onChangeText={(Text) => setUser({ ...user, dtNascimento: Text })}
      />
      <TextoInput
        placeholder={"foto"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
        defaultValue={user.foto}
        onChangeText={(Text) => setUser({ ...user, foto: Text })}
      />
      <TextoInput
        placeholder={"Login"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
        defaultValue={user.login}
        onChangeText={(Text) => setUser({ ...user, login: Text })}
      />
      <TextoInput
        placeholder={"Senha"}
        style={{
          textAlign: "center",
          color: "white",
          borderBottom: "1px solid #000000",
        }}
        defaultValue={user.senha}
        onChangeText={(Text) => setUser({ ...user, senha: Text })}
      />
      </ContCadastro>
      <LoginButton onPress={cadastro}>
        <CadastroText>Criar Conta</CadastroText>
      </LoginButton>
    </ContainerCadastro>
  );
};

export default CreateAccount;
