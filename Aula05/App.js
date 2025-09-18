import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import GaleriaScreen from './screens/GaleriaScreen';

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início', headerTitleAlign: 'center' }} />
				<Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil', headerTitleAlign: 'center' }} />
				<Stack.Screen name="Galeria" component={GaleriaScreen} options={{ title: 'Galeria', headerTitleAlign: 'center' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}