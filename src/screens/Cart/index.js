import React,{useContext} from "react";
import { Text, View,Image } from "react-native";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { CartContext } from "../../context/Cart";
import { Button } from "react-native-paper";
import { Header } from "../../components/Header/index.js";
import { TouchableOpacity } from "react-native-web";
import { Entypo, FontAwesome5, AntDesign  } from '@expo/vector-icons'; 


export const Cart = (props) => {
  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  };

    const {
    clearCart, 
    addItem, 
    product, 
    removeItem, 
    removeItemCart
    } = useContext(CartContext)

    let total = 0
    return (
        <MainContainer>
      <Header title={"Meu carrinho"} iconName={"arrow-back"} goBack={goBack} />
      
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
            <Text>{product.nome}</Text>
          <View>
            <Text>Resumo de todo o carrinho</Text>
            <View>
              <Text>Preço total do pedido: </Text>
              <Text>R${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
    </MainContainer>
  );
};
