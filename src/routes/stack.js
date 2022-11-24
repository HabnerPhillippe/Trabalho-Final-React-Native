import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Cart } from "../screens/Cart/index"
import { Categories } from "../screens/Categories/index.js";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";
import { EditCategory } from "../screens/EditCategory/index.js";
import { ForgotPass } from "../screens/ForgotPass/index";
import { Home } from "../screens/Home/index";
import { Ionicons } from "@expo/vector-icons";
import { Login } from "../screens/Login/index.js";
import { ProductPage } from "../screens/ProductPage/index";
import React from "react";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShow:false,
        tabBarStyle:{
          backgroundColor: "#ffff",
          borderTopColor: "#EBE4E4",
          paddingBottom: 5,
          paddingTop: 5,
        }
      }}
      tabBarOptions={{
        activeTintColor: "#FF0000",
        inactiveTintColor: "#BEBEBE"
      }}

      >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={25} color={"#BEBEBE"}/>
            ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={ProductPage}
        options={{
          tabBarIcon: () => (
            <Ionicons name="grid-outline" size={25} color={"#BEBEBE"}/>
          ),
      }}
        />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <Ionicons name="cart-outline" size={25} color={"#BEBEBE"}/>
          ),
      }}
        />
    </Tab.Navigator>
  );
}

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
      <Stack.Screen name="Cart" component={TabRoutes} />
      <Stack.Screen name="EditCategory" component={EditCategory} />
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ProductPage" component={TabRoutes} />
    </Stack.Navigator>
  );
}