// 📄 App.js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import QuartaScreen from './screens/QuartaScreen';
import SegundaScreen from './screens/SegundaScreen';
import TerceiraScreen from './screens/TerceiraScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Segunda" component={SegundaScreen} />
        <Stack.Screen name="Terceira" component={TerceiraScreen} />
        <Stack.Screen name="Quarta" component={QuartaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
