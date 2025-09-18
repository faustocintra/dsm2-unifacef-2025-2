import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import QuadroScreen from './screens/QuadroScreen';
import IconsScreen from './screens/IconsScreen';
import GaleriaScreen from './screens/GaleriaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quadro" component={QuadroScreen} />
        <Stack.Screen name="Icons" component={IconsScreen} />
        <Stack.Screen name="Galeria" component={GaleriaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

