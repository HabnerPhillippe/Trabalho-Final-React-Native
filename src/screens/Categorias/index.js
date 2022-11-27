import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { Api } from "../../services";
import { Header } from "../../components/Header/index.js";
const Categorias = (props) => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const [categoria, setCategorias] = useState([]);

  useEffect(() => {
    getCategorias();
  }, [categoria]);

  const getCategorias = async () => {
    const { data } = await Api.get("/categoria");
    setCategorias(data);
  };

  useEffect(() => {
    getProduct();
  }, [product]);

  const getProduct = async () => {
    const { data } = await Api.get(`/produto/`);
    setProduct(data);
  };

  function goBack() {
    navigation.goBack();
  }

  return (
    <View>
      <Header title={"Categorias "} iconName={"arrow-back"} onPress={goBack} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 100,
        }}
      >
        {categoria.map((categorias) => {
          {
            product.map((produto) => {
              if (categoria.id === produto.categoria.id)
                return (
                  <View>
                    <View key={produto.id}>
                      <Image
                        source={{ uri: categoria.foto }}
                        style={{ width: 150, heigth: 150 }}
                      />
                      <Text>{produto.nome}</Text>
                    </View>
                  </View>
                );
            });
          }
        })}
      </View>
    </View>
  );
};

export default Categorias;
