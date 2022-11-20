import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./src/routes/stack";
import { IdProvider } from "./src/context";
import "react-native-gesture-handler";
import { CartProvider } from "./src/context/Cart.js";

export default function App() {
  return (
    <CartProvider>
      <IdProvider>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </IdProvider>
    </CartProvider>
  );
}
