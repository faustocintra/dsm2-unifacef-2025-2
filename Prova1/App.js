import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScrenn from './screens/HomeScrenn';
import ImgInt from './screens/ImgInt';
import ImgLoc from './screens/ImgLoc';
import Icon from './screens/Icon';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScrenn} />
        <Stack.Screen name="Imagem da Internet" component={ImgInt} />
        <Stack.Screen name="Imagem Local" component={ImgLoc} />
        <Stack.Screen name="Ícones" component={Icon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
