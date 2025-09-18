import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import IntImage from './screens/IntImage'
import Icon from './screens/Icon';
import { StackScreen } from 'react-native-screens';
import Imagems from './screens/Image';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="IntImage" component={IntImage} />
        <Stack.Screen name = "Imagems" component ={Imagems}/>
        <Stack.Screen name = "Icon" component ={Icon}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};