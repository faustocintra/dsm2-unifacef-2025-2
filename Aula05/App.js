import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import GalleryScreen from './screens/GalleryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="light" />
			<Stack.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: '#0F1115' },
					headerTintColor: '#fff',
					headerTitleStyle: { fontWeight: '600' },
					contentStyle: { backgroundColor: '#0F1115' },
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
				<Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} />
				<Stack.Screen name="Gallery" component={GalleryScreen} options={{ title: 'Galeria' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}