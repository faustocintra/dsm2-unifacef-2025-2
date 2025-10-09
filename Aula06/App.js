// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importando nossas telas originais
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import WelcomeScreen from './screens/WelcomeScreen';

// --- NOVO: 1. IMPORTAR AS NOVAS TELAS ---
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/ProfileScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* A tela inicial continua sendo o Login */}
      <Stack.Navigator initialRouteName="Login">
        
        {/* Telas que já tínhamos */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Bem-vindo' }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Crie sua conta' }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ title: 'Sucesso!' }} />
        
        {/* --- NOVO: 2. ADICIONAR AS NOVAS TELAS AO NAVEGADOR --- */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalhes' }}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}