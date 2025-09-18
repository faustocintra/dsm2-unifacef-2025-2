import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './screens/HomePage';
import InternetPage from './screens/InternetPage';
import IconsPage from './screens/IconsPage';
import ImagePage from './screens/ImagePage'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Internet" component={InternetPage} />
        <Stack.Screen name="Image" component={ImagePage} />
        <Stack.Screen name="Icons" component={IconsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}