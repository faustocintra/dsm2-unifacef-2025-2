import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import PhotoScreen from './Screens/PhotoScreen';
import LocalScreen from './Screens/LocalScreen';
import IconsScreen from './Screens/IconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Foto" component={PhotoScreen} />
        <Stack.Screen name="Local" component={LocalScreen} />
        <Stack.Screen name="Icone" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}