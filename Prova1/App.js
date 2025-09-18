
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from './screens/HomeScreen'
import ImgInternet from './screens/ImagemInternet'
import ImgLocal from './screens/ImagemLocal'
import Icones from './screens/Icones';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name="Início" component={HomeScreen} />
 <Stack.Screen name='Imagem da Internet' component={ImgInternet}/>
 <Stack.Screen name='Imagem local' component={ImgLocal}/>
 <Stack.Screen name='Icones' component={Icones}/>
 </Stack.Navigator>
 </NavigationContainer>
);
}