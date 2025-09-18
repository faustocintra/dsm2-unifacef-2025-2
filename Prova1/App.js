import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingScreen from './screens/landing-screen';
import WebImageScreen from './screens/web-image-screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LocalImageScreen from './screens/local-image-screen';
import IconsScreen from './screens/icons-screen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="WebImage" component={WebImageScreen} />
        <Stack.Screen name="LocalImage" component={LocalImageScreen} />
        <Stack.Screen name="Icons" component={IconsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
