import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SimpleScreen from './screens/SimpleScreen';
import FullScreen from './screens/FullScreen';
import IconsScreen from './screens/IconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Simples" component={SimpleScreen} />
        <Stack.Screen name="Tela Cheia" component={FullScreen} />
        <Stack.Screen name="Ícones" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
