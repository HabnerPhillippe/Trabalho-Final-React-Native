import { MainContainer } from "../../components/MainContainer/styles.js";
import { Header } from "../../components/Header/index.js";
import { useNavigation } from "@react-navigation/native";
import { PlusButton } from "../../components/PlusButton/index.js";
import { Api } from "../../services";
import { FlatList } from "react-native";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { useState, useEffect } from "react";

export const Home = ()=> {
    const navigation = useNavigation();
    const [product, setProduct] = useState([]);

    const renderItem = ({ item }) => (
        <ItemCategory name={item.nome} photo={item.foto} />
      );

      useEffect(() => {
        getProdutos();
      }, [product]);

      const getProdutos= async () => {
        const { data } = await Api.get("/produto");
        setProduct(data);
      };
    
      function goBack() {
        navigation.goBack();
      };

  return (
    <MainContainer>
      console.log(product);
      <Header title={"produtos"} iconName={"arrow-back"} goBack={goBack} />
      <PlusButton onPress={() => navigation.navigate("CategoryRegister")} />
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </MainContainer>
  )
}