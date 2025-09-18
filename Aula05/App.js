import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import GaleryScreen from "./screens/GaleryScreen";

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
          name="Profile"
          component={ProfileScreen}
        />
        <Stack.Screen
          name="Galery"
          component={GaleryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
