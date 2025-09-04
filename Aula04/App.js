import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#4CAF50' }, // cor de fundo
          headerTintColor: '#fff', // cor do texto e ícones
          headerTitleAlign: 'center', // título centralizado
          headerTitleStyle: { fontSize: 20, fontWeight: 'bold' } // estilo do título
        }}
      >
        <Stack.Screen 
          name="Início" 
          component={HomeScreen} 
          options={{ title: '🏠 Tela Inicial' }}
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetailsScreen} 
          options={{ title: '📑 Detalhes' }}
        />
        <Stack.Screen 
          name="Perfil" 
          component={ProfileScreen} 
          options={{ title: '👤 Meu Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
