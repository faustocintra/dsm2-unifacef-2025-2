import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import Galery from "./screens/GaleryScreen";
import GaleryLocal from "./screens/GaleryLocalScreen";
import Icon from "./screens/IconScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Galery"
          component={Galery}
        />
        <Stack.Screen
          name="GaleryLocal"
          component={GaleryLocal}
        />
        <Stack.Screen
          name="Icon"
          component={Icon}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}