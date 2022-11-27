import { Api } from "../../services/index.js";
import {
  Card,
  ComprarText,
  Price,
  Name,
  Photo,
  TextContainer,
  ComprarButton,
} from "./styles";
import colors from "../../themes/colors";
import { IdContext } from "../../context/index.js";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../context/Cart";
import { ImageBackground, View } from "react-native";
import cube from "../../../assets/cube.PNG";

export const ItemCategory = ({ name, price, id, photo }) => {
  const [product, setProduct] = useState([]);
  const { setId } = useContext(IdContext);
  const navigation = useNavigation();
  const { addItem } = useContext(CartContext);

  function deleteItem(id) {
    Api.delete(`/categoria/${id}`).then(() => {
      alert("Item excluido com sucesso!");
      navigation.navigate("Categories");
    });
  }

  function editItem(id) {
    const itemId = id;
    setId(itemId);
    navigation.navigate("EditCategory");
  }

  return (
    <View>
      <ImageBackground source={cube}>
        <Card>
          <Photo source={{ uri: photo }} />
          <TextContainer>
            <Name>{name}</Name>
            <Price>R${price}</Price>
          </TextContainer>
          <ComprarButton onPress={() => addItem(name, price, id, photo)}>
            <ComprarText>COMPRAR</ComprarText>
          </ComprarButton>
        </Card>
      </ImageBackground>
    </View>
  );
};
