import { View, Text } from "react-native";
import React from "react";
import { Api } from "../../services/index.js";
import { CartContext } from "../../context/Cart.js"

export const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    Api.get(`/produto/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [id]);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};
