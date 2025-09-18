import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicialScreen from './screens/InicialScreen';
import InternetScreen from './screens/InternetScreen';
import LocalImageScreen from './screens/LocalImageScreen';
import IconsScreen from './screens/IconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={InicialScreen} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Internet" component={InternetScreen} options={{ title: 'Imagem da Internet' }} />
        <Stack.Screen name="Local" component={LocalImageScreen} options={{ title: 'Imagem Local' }} />
        <Stack.Screen name="Icones" component={IconsScreen} options={{ title: 'Ícones' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
