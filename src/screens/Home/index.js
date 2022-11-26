import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Header } from "../../components/Header/index.js";
import { ItemCategory } from "../../components/ItemCategory/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { Api } from "../../services";


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
  function goCategorias(){
    navigation.navigate("Categorias");
  }


  return (
    <MainContainer>
      <Header  title={"Mais vendidos !"} />

      
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />
     
    </MainContainer>
  );
};
