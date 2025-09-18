import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './app/screens/HomeScreen';
import InternetScreen from './app/screens/InternetScreen';
import LocalImageScreen from './app/screens/LocalImageScreen';
import IconsScreen from './app/screens/IconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Internet" component={InternetScreen} />
        <Stack.Screen name="Local" component={LocalImageScreen} />
        <Stack.Screen name="Ícones" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
