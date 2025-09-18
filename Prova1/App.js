import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImageWeb from './screens/ImageWeb';
import LocalImage from './screens/LocalImage';
import IconsScreen from './screens/IconsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageWeb" component={ImageWeb} />
        <Stack.Screen name="LocalImage" component={LocalImage} />
        <Stack.Screen name="IconsScreen" component={IconsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}