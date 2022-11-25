import { Api } from "../../services/index.js";
import { CartContext } from "../../context/Cart.js"
import { ContainerLogin } from ".././Login/styles.js";
import { Image, View } from "react-native";
import React, {useState,useEffect} from "react";

export const ProductPage = ({id}) => {
  const [product, setProduct] = useState([]);
 
  

  useEffect(() => {
    getProducts();
  }, [product]);

  const getProducts = async () => {
    const { data } = await Api.get("/produto");
    setProduct(data);
  };

  return (
    <ContainerLogin>
        {product?.map((produto) => {
              return (
                <View key={produto.id}>
                <Image source={{uri:produto.foto}}/>
                <View>{produto.nome}</View>
                <View>R$ {produto.preco}</View>  
                </View>
              );
        })}
      </ContainerLogin>
  );
};