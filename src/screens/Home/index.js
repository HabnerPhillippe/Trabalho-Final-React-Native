import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { useNavigation } from "@react-navigation/native";
import { PlusButton } from "../../components/PlusButton/index.js";
import { Api } from "../../services";
import { FlatList } from "react-native";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { useState, useEffect } from "react";
import { Gradient } from "../../components/Gradient/index.js";

export const Home = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);

  const renderItem = ({ item }) => (
    <ItemCategory name={item.nome} photo={item.foto} />
  );

  useEffect(() => {
    getProdutos();
  }, [product]);

  const getProdutos = async () => {
    const { data } = await Api.get("/produto");
    setProduct(data);
  };

  function goBack() {
    navigation.goBack();
  }

  return (
    <MainContainer>
      <Header title={"Mais vendidos !"} />

      {/* <PlusButton onPress={() => navigation.navigate("CategoryRegister")} /> */}
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </MainContainer>
  );
};
