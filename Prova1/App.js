import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import IconScreen from './screens/IconScreen';
import LocalImageScreen from './screens/LocalImageScreen';
import WebImageScreen from './screens/WebImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Imagem da Web" component={WebImageScreen} />
        <Stack.Screen name="Imagem Local" component={LocalImageScreen} />
        <Stack.Screen name="Ícones" component={IconScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
