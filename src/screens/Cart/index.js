import { ButtonText, BuyButton, TextBuy } from "./styles";
import { CartContext } from "../../context/Cart";
import { Text, View } from "react-native-web"
import { Header } from "../../components/Header/index.js";
import React,{useContext} from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, Image } from "react-native";
import { FontAwesome5, AntDesign  } from '@expo/vector-icons'; 
import {RemoveItemButton, AddRemove, Resume, ProductContainer,Container, TrashButton, NoItems} from "./styles"

export const Cart = (props) => {
  const navigation = useNavigation();

  const {
    clearCart, 
    addItem, 
    product, 
    removeItem, 
    removeItemCart
    } = useContext(CartContext)

    let total = 0

  function goBack() {
    navigation.goBack();
  };

  function endCart(){
    clearCart();
    alert("Pedido Finalizado!")
  }

  return (
    <Container>
      <Header title={"Carrinho"} iconName={"arrow-back"} goBack={goBack} />
      <View>
          <View >
            {product.length === 0 && <NoItems>Não há itens no carrinho</NoItems>}

               {product.length !== 0 && <TrashButton 
                onPress={() => clearCart()}>
                  <FontAwesome5 name="trash" size={20} color="black" />
                </TrashButton>}
           
            {product.map((produto) => {
              const productPrice = produto.preco * produto.qtd
              total += productPrice
              const productPhoto = produto.foto

              return (
                
                <ProductContainer key={produto.id}>
                  <View>
                    <Image source={produto.foto} />
                  </View>
                  <View>
                    <Text>{produto.nome}</Text>
                    <View>
                      <Text>Quantidade: {produto.qtd} </Text>
                      <Text>Valor: R${productPrice.toFixed(2)}</Text>
                    </View>
                    <AddRemove>
                      <TouchableOpacity onPress={() => addItem(
                        produto.nome,produto.preco,produto.id,produto.foto
                      )}>
                       <AntDesign name="plussquareo" size={24} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={() => removeItemCart(produto.id)}>
                      <AntDesign name="minussquareo" size={24} color="black" />
                      </TouchableOpacity>
                      <RemoveItemButton onPress={() => 
                        removeItem(produto.id)
                      }>
                       <AntDesign name="close" size={24} color="black" />
                      </RemoveItemButton>
                      </AddRemove>
                  </View>
                </ProductContainer>
              )
            })}
          </View>
        </View>
        <Resume>
              <Text>Preço total do pedido: </Text>
              <Text>R${total.toFixed(2)}</Text>
          </Resume>
      <BuyButton onPress={() => endCart()}>
        <ButtonText>FINALIZAR</ButtonText>
      </BuyButton>
    </Container>
  );
};
