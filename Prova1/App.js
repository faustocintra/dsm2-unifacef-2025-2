 import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaInicial from './screens/PaginaInicial';
import ImagemInternet from './screens/ImagemInternet';
import ImagemLocal from './screens/ImagemLocal';
import Icones from './screens/Icones';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
    <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Inicial" component={PaginaInicial}/>
            <Stack.Screen name="internet" component={ImagemInternet}/>
            <Stack.Screen name="local" component={ImagemLocal}/>
            <Stack.Screen name="icones" component={Icones}/>
         </Stack.Navigator>
    </NavigationContainer>
 );
  };