import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import GalleryScreen from './screens/GalleryScreen';
import GalleryScreen2 from './screens/GalleryScreen2';
import Icon from './screens/IconScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Página Inicial" component={HomeScreen} />
        <Stack.Screen name="Galeria - URL" component={GalleryScreen} />
        <Stack.Screen name="Galeria - Local" component={GalleryScreen2} />
        <Stack.Screen name="Icons" component={Icon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
