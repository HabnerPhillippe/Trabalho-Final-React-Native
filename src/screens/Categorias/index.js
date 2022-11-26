
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Api } from "../../services";

const Categorias = () => {
    const navigation = useNavigation();

    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        getCategorias();
    }, []);

    const getCategorias = async () => {
        const { data } = await Api.get("/categoria");
        setCategorias(data);
    };

    return (
        <View style={{ flex: 1, alignItems: "center",
         justifyContent: "center",
          paddingLeft: 20,
           paddingRight: 20,
            marginTop: 100 }}>
            {categorias?.map((categorias) => {
                return (
                    <View key={categorias.id}>
                        <Image source={{ uri: categorias.foto }} style={{ width: 150, heigth: 150 }} />
                        <Text> {categorias.nome}</Text>

                    </View>
                )

            })}

        </View>


    )


}


export default Categorias;