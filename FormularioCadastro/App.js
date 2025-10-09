import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import PerfilScreen from './screens/PerfilScreen';
import SucessoScreen from './screens/SucessoScreen'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {}
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen 
          name="Cadastro"
          component={HomeScreen} 
          options={{ title: 'Formulário de Cadastro' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={DetailsScreen} 
          options={{ title: 'Detalhes' }} 
        />
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: 'Meu Perfil' }} 
        />
        {}
        <Stack.Screen 
          name="Sucesso" 
          component={SucessoScreen} 
          options={{ title: 'Dados Enviados' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}