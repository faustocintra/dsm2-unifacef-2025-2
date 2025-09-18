import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NetworkScreen from "./screens/NetworkScreen";
import LocalScreen from "./screens/LocalScreen";
import IconsScreen from "./screens/IconsScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Network" component={NetworkScreen} />
        <Stack.Screen name="Local" component={LocalScreen} />
        <Stack.Screen name="Icons" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
