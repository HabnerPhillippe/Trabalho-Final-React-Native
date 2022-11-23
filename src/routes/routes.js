import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Cart } from "../screens/Cart/index"
import { Categories } from "../screens/Categories/index.js";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";
import { EditCategory } from "../screens/EditCategory/index.js";
import { ForgotPass } from "../screens/ForgotPass/index";
import { Home } from "../screens/Home/index"
import { Login } from "../screens/Login/index.js";
import { ProductPage } from "../screens/ProductPage/index";
import React from "react";


const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShow:false,
      }}
      >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Login"  component={Login}/>
      <Tab.Screen name="ForgotPass" component={ForgotPass}/>
      <Tab.Screen name="Cart" component={Cart}/>
      <Tab.Screen name="Product" component={ProductPage}/>
      <Tab.Screen name="Categories" component={Categories}/>
      <Tab.Screen name="CategoryRegister" component={CategoryRegister}/>
      <Tab.Screen name="EditCategory" component={EditCategory}/>
    </Tab.Navigator>
  );
}