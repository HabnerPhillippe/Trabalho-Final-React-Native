import { ButtonText, BuyButton, MarcaDagua, TextBuy } from "./styles";
import { CartContext } from "../../context/Cart";
import { Image, Text, View } from "react-native-web"
import { Header } from "../../components/Header/index.js";
import { MainContainer } from "../../components/MainContainer/styles.js";
import React,{useContext} from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons'; 

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
    <MainContainer>
      <Header title={"Carrinho"} iconName={"arrow-back"} goBack={goBack} />
      <View>
          <View >
            {product.length === 0 && <Text>não há itens no carrinho</Text>}

               {product.length !== 0 && <TouchableOpacity 
                onPress={() => clearCart()}>
                  <FontAwesome5 name="trash" size={20} color="black" />
                </TouchableOpacity>}
           
            {product.map((produto) => {
              const productPrice = produto.preco * produto.qtd
              total += productPrice

              return (
                
                <View key={produto.id}>
                  <View>
                    <Image source={produto.foto} alt='' />
                  </View>
                  <View>
                    <Text>{produto.nome}</Text>
                    <View>
                      <Text>Quantidade: {produto.qtd} </Text>
                      <Text>Valor: R${productPrice.toFixed(2)}</Text>
                    </View>
                  </View>
                  <View key={produto.id}>
                    <View>
                    <TouchableOpacity onPress={() => 
                        removeItem(produto.id)
                      }>

                       <AntDesign name="close" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                    <View >
                      <TouchableOpacity onPress={() => addItem(
                        produto.nome,produto.preco,produto.id,produto.foto
                      )}>
                       
                       <AntDesign name="pluscircleo" size={24} color="black" />
                      </TouchableOpacity>
                      <TouchableOpacity  onPress={() => removeItemCart(produto.id)}>
                      <AntDesign name="minuscircleo" size={24} color="black" />
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
              )
            })}
          </View>

          <View>
            <Text>Resumo de todo o carrinho</Text>
            <View>
              <Text>Preço total do pedido: </Text>
              <Text>R${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      
      <TextBuy>Finalizar pedido</TextBuy>
      <BuyButton onPress={() => endCart()}>
        <ButtonText>Comprar</ButtonText>
      </BuyButton>   
    </MainContainer>
  );
};
