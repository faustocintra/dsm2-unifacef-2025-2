import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import WebImageScreen from './screens/WebImageScreen';
import LocalImageScreen from './screens/LocalImageScreen';
import IconsScreen from './screens/IconsScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="ImagemWeb" component={WebImageScreen} />
        <Stack.Screen name="ImagemLocal" component={LocalImageScreen} />
        <Stack.Screen name="Icons" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
