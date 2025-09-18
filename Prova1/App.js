import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import InternetImage from './screens/InternetImage';
import LocalImage from './screens/LocalImage';
import Icons from './screens/Icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="InternetImage" component={InternetImage} />
        <Stack.Screen name="LocalImage" component={LocalImage} />
        <Stack.Screen name="Icons" component={Icons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
