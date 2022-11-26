import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Cart } from "../screens/Cart/index";
import { Categories } from "../screens/Categories/index";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";
import { CreateAccount } from "../screens/CreateAccount/index.js";
import { EditCategory } from "../screens/EditCategory/index.js";
import { ForgotPass } from "../screens/ForgotPass/index";
import { Home } from "../screens/Home/index";
import { Login } from "../screens/Login/index.js";

import React from "react";
import Categorias from "../screens/Categorias";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarStyle:{
          backgroundColor: "#ffff",
          borderTopColor: "#EBE4E4",
          paddingBottom: 5,
          paddingTop: 5,
        }
      }}
      tabBarOptions={{
        activeTintColor: "#FF0000",
        inactiveTintColor: "#FF0000"
      }}

      >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
            tabBarIcon: () => (
              <Ionicons name="home-outline" size={25} color={"#FF0000"}/>
            ),
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarIcon: () => (
            <Ionicons name="cart-outline" size={25} color={"#FF0000"}/>
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cart" component={TabRoutes} />
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Categorias" component={Categorias} />
      <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="EditCategory" component={EditCategory} />
      
    </Stack.Navigator>
  );
}