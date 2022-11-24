import React,{useContext} from "react";
import { Text, View } from "react-native";
import { MainContainer } from "../../components/MainContainer/styles.js";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { CartContext } from "../../context/Cart";
import { Button } from "react-native-paper";
import { Header } from "../../components/Header/index.js";

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

               {product.length !== 0 && <Button 
                onClick={() => clearCart()}>
                </Button>}
           
            {product.map((produto) => {
              const productPrice = produto.valor * produto.qtd
              total += productPrice

              return (
                
                <View key={route.params.id}>
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
                      <Button onClick={() => 
                        removeItem(produto.id)
                      }>
                       
                      </Button>
                    </View>
                    <View >
                      <Button onClick={() => addItem(
                        produto.id,
                        produto.foto,
                        produto.nome,
                        produto.preco
                      )}>
                       
                      </Button>
                      <Button  onClick={() => removeItemCart(produto.id)}>

                      </Button>
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
