import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './screens/HomePage';
import ImagePage1 from './screens/ImagePage1';
import ImagePage2 from './screens/ImagePage2';
import ImagePage3 from './screens/ImagePage3';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="ImagePage1" component={ImagePage1} />
        <Stack.Screen name="ImagePage2" component={ImagePage2} />
        <Stack.Screen name="ImagePage3" component={ImagePage3} />

      </Stack.Navigator>

    </NavigationContainer>
    
  );

}