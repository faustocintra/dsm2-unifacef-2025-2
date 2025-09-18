import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import InternetImageScreen from './screens/InternetImageScreen';
import LocalImageScreen from './screens/LocalImageScreen';
import IconsScreen from './screens/IconsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial', headerTitleAlign: 'center' }} />
        <Stack.Screen name="InternetImage" component={InternetImageScreen} options={{ title: 'Imagem da Internet', headerTitleAlign: 'center' }} />
        <Stack.Screen name="LocalImage" component={LocalImageScreen} options={{ title: 'Imagem Local', headerTitleAlign: 'center' }} />
        <Stack.Screen name="IconsScreen" component={IconsScreen} options={{ title: 'Ícones', headerTitleAlign: 'center' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
