import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { useContext, useState, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { Api } from "../../services/index.js";
import colors from "../../themes/colors";
import { Card, Photo, TextContainer, Name, CustomButton, ButtonsContainer, ComprarButton, ComprarText } from "./styles";
import { IdContext } from "../../context/index.js";
import { CartContext } from "../../context/Cart";

export const ItemCategory = ({ id, name, photo,price }) => {
  const [product, setProduct] = useState([]);
  const { setId } = useContext(IdContext)
  const navigation = useNavigation()
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
    <Card >
      <Photo source={{ uri: photo }} />
      <ComprarButton onClick={() => props.navigation.navigate("Cart",{product})}>
        <ComprarText>COMPRAR</ComprarText>
      </ComprarButton>
      <TextContainer>
        <Name>{name}</Name>
        <Name style={{color:"red"}}>R${price}</Name>
      </TextContainer>
      <ButtonsContainer>
        <CustomButton onPress={() => navigation.navigate("Cart")}>
          <FontAwesome5 name="trash" size={20} color={colors.primary} />
        </CustomButton>
        <CustomButton onPress={() => editItem(id)}> 
          <MaterialIcons name="edit" size={24} color={colors.primary} />
        </CustomButton>
      </ButtonsContainer>
    </Card>
  );
};
