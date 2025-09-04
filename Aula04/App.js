import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import PerfilScreen from './screens/PerfilScreen'; // ✅ import novo

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailsScreen} />
        <Stack.Screen
          name="Perfil"
          component={PerfilScreen}
          options={{ title: 'Meu Perfil' }} // ✅ título personalizado
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
