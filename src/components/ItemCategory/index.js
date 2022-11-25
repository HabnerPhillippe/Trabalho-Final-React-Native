import { Api } from "../../services/index.js";
import { ButtonsContainer, Card, ComprarText, CustomButton, Name, Photo, TextContainer,ComprarButton } from "./styles";
import colors from "../../themes/colors";
import { IdContext } from "../../context/index.js";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useContext,useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../context/Cart"

export const ItemCategory = ({id, name, photo,price }) => {
  const [product, setProduct] = useState([]);
  const { setId } = useContext(IdContext)
  const navigation = useNavigation();
  const { addItem } = useContext(CartContext)

  function deleteItem(id) {
    Api.delete(`/categoria/${id}`)
      .then(() => {
        alert("Item excluido com sucesso!");
        navigation.navigate("Categories");
      });
  };

  function editItem(id) {
    const itemId = id;
    setId(itemId);
    navigation.navigate("EditCategory");
  };

  return (
    <Card>
      <Photo source={{ uri: photo }} />
      <TextContainer>
        <Name>{name}</Name>
      </TextContainer>
      <ComprarButton onPress={() => addItem(name,price,id,photo)}>
        <ComprarText>COMPRAR</ComprarText>
      </ComprarButton>
    </Card>
  );
};