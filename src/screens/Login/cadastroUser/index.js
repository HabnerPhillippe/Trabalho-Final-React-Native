import React, { useState } from "react";
import { TextInput, View } from "react-native";

export const CadastroUser = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState({
        cpf: "",
        dtNascimento: "",
        foto: "",
        login: "",
        nome: "",
        senha: ""
    })
    console.log(user);

    return (
        <View>
            <TextInput placeholder="login"
                defaultValue={user.login}
                onChangeText={newText => setUser(newText)} />
        </View>
    )
}