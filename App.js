import { CartProvider } from "./src/context/Cart.js";
import { IdProvider } from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Routes } from "./src/routes/routes";
import "react-native-gesture-handler";

export default function App() {
  return (
    <CartProvider>
      <IdProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </IdProvider>
    </CartProvider>
  );
}
