import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Galeria from './screens/Galeria';
import PerfilScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Galeria" component={Galeria} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{headerStyle:{backgroundColor: "#2a9e42ff"}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
