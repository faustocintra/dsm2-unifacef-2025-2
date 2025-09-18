import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Imagens from './screens/Imagens';
import Imagen_local from './screens/Imagen_local';
import Icone from './screens/Icones';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Imagens" component={Imagens} />
        <Stack.Screen name="Imagen_local" component={Imagen_local}/>
        <Stack.Screen name="Icone" component={Icone}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
