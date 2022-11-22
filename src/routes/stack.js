import { Cart } from "../screens/Cart/index"
import { createStackNavigator } from "@react-navigation/stack";
import { Categories } from "../screens/Categories/index.js";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";
import { EditCategory } from "../screens/EditCategory/index.js";
import { ForgotPass } from "../screens/ForgotPass/index";
import { Home } from "../screens/Home/index"
import { Login } from "../screens/Login/index.js";
import { ProductPage } from "../screens/ProductPage/index"
import { Splash } from "../screens/Splash/index.js";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle:'Teste',
        headerShow:false,
      }}
      >
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Login"  component={Login}/>
      <Stack.Screen name="ForgotPass" component={ForgotPass}/>
      <Stack.Screen name="Cart" component={Cart}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Product" component={ProductPage}/>
      <Stack.Screen name="Categories" component={Categories}/>
      <Stack.Screen name="CategoryRegister" component={CategoryRegister}/>
      <Stack.Screen name="EditCategory" component={EditCategory}/>
    </Stack.Navigator>
  );
}