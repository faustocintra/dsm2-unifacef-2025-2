import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";

// Importando as telas
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";
import LocalImageScreen from "./screens/LocalImageScreen";
import IconsScreen from "./screens/IconsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Página Inicial" }}
        />
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{ title: "Imagem da Internet" }}
        />
        <Stack.Screen
          name="LocalImageScreen"
          component={LocalImageScreen}
          options={{ title: "Imagem Local" }}
        />
        <Stack.Screen
          name="IconsScreen"
          component={IconsScreen}
          options={{ title: "Três Ícones" }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
