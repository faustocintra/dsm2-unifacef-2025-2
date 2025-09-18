import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Icons from './screens/Icons';
import InternetImage from './screens/InternetImage';
import LocalImage from './screens/LocalImage'

const Stack = createNativeStackNavigator();

export default function App() {
 return (
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Início" component={Home} />
    <Stack.Screen name="Imagem Internet" component={InternetImage}/>
    <Stack.Screen name="Imagem Local" component={LocalImage}/>
    <Stack.Screen name="Icone" component={Icons} />

  </Stack.Navigator>
 </NavigationContainer>
 );
}