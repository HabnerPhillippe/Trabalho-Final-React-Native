import { Api } from "../../services";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { FlatList } from "react-native";
import { Header } from "../../components/Header/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { PlusButton } from "../../components/PlusButton/index.js";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Gradient } from "../../components/Gradient/index.js";


export const Home = () => {
  const navigation = useNavigation();
  
  const [product, setProduct] = useState([]);

  const renderItem = ({ item }) => (
    <ItemCategory name={item.nome} photo={item.foto} id={item.id} price={item.preco} />
  );

  useEffect(() => {
    getProduct();
  }, [product]);

  const getProduct = async () => {
    const { data } = await Api.get("/produto");
    setProduct(data);
  };

  function goBack() {
    navigation.goBack();
  }



  return (
    <MainContainer>
      <Header title={"Mais vendidos !"} iconName={"arrow-back"} goBack={goBack} />

      
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
    </MainContainer>
  );
};
