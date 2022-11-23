import React, { createContext, useState } from "react";

export const CartContext = createContext({});
export const CartProvider = ({ children }) => {
  const [product, setProduct] = useState([])

  function addItem(nome, preco, id, foto) {
    const itemObject = [...product];
    const item = itemObject.find((produto) => produto.id === id)

    if (!item) {
      itemObject.push({
        id: id,
        foto: foto,
        nome: nome,
        preco: preco,
        qtd: 1,
      });
    } else {
      item.qtd = item.qtd + 1
    }
    setProduct(itemObject)
  }

  function clearCart() {
    setProduct([]);
  }

  function removeItemCart(id) {
    const itemObject = [...product];
    const item = itemObject.find((produto) => produto.id === id);

    if (item && item.qtd > 1) {
      item.qtd = item.qtd - 1
      setProduct(itemObject)
    } else {
      const arrayFiltered = itemObject.filter((produto) => produto.id !== id)
      setProduct(arrayFiltered)
    }
  }

  function removeItem(id){
    const itemObject = [...product]

    const arrayFiltered = itemObject.filter((produto)=>produto.id !==id)
    setProduct(arrayFiltered)
  }

  return (
    <CartContext.Provider
      value={{
        clearCart,
        addItem,
        product,
        removeItem,
        removeItemCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
