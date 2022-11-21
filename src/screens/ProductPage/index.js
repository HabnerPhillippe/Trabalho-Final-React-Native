import { View, FlatList } from "react-native";
import React, {useState,useParams,useEffect} from "react";
import { Api } from "../../services/index.js";
import { CartContext } from "../../context/Cart.js"

export const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  

  useEffect(() => {
    getProducts();
  }, [product]);

  const getProducts = async () => {
    const { data } = await Api.get("/produto");
    setProduct(data);
  };

  return (
    <View>
      <FlatList
        data={category}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
