import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import GalleryScreen from "./screens/GalleryScreen"; // <- NOVO
import { Ionicons } from "@expo/vector-icons";        // <- para o ícone do header

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={ProfileScreen} />
        <Stack.Screen
          name="Galeria"
          component={GalleryScreen}
          options={{
            title: "Galeria",
            // Ícone de câmera no topo, com tamanho/cor personalizados
            headerRight: () => <Ionicons name="camera" size={24} color="#2563EB" />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
