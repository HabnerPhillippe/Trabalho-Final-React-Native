import { Categories } from "../screens/Categories/index.js";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";
import { EditCategory } from "../screens/EditCategory/index.js";
import { Splash } from "../screens/Splash/index.js";
import { Login } from "../screens/Login/index.js";
import { Home } from "../screens/Home/index"

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShow: false,
      }}
    > 
      <Stack.Screen name="Splash" component={Splash}/>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
      <Stack.Screen name="EditCategory" component={EditCategory} />
    </Stack.Navigator>
  );
}
