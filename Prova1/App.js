import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ImagemInternet from './screens/ImagemInternet';
import ImagemLocal from './screens/ImagemLocal';
import TresIcones from './screens/TresIcones';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Página Inicial' }} 
        />
        <Stack.Screen 
          name="ImagemInternet" 
          component={ImagemInternet} 
          options={{ title: 'Imagem da Internet' }} 
        />
        <Stack.Screen 
          name="ImagemLocal" 
          component={ImagemLocal} 
          options={{ title: 'Imagem Local' }} 
        />
        <Stack.Screen 
          name="TresIcones" 
          component={TresIcones} 
          options={{ title: 'Três Ícones' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

