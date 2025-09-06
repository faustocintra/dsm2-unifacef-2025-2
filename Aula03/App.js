import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// --------- Tela Principal (Detalhes) ---------
function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contagem: {count}</Text>

      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Clique para aumentar</Text>
      </TouchableOpacity>

      {/* Botão para navegar até a tela Perfil */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: "#8E24AA" }]}
        onPress={() => navigation.navigate("Perfil")}
      >
        <Text style={styles.buttonText}>Ir para Perfil</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

// --------- Tela Perfil ---------
function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Tela de Perfil</Text>
    </View>
  );
}

// --------- Navegação ---------
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Detalhes" 
          component={HomeScreen} 
          options={{ title: "Tela de Detalhes" }} 
        />
        <Stack.Screen 
          name="Perfil" 
          component={PerfilScreen} 
          options={{ title: "Meu Perfil ✨" }} // título personalizado no cabeçalho
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFB6C1", // Fundo rosado claro
    alignItems: "center",
    justifyContent: "center",
  },
  counterText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#D5006D", // Cor de texto no contador (rosa escuro)
    marginBottom: 20,
    fontFamily: "Roboto",
  },
  button: {
    backgroundColor: "#FF1493", // Rosa vibrante
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#FFEB3B",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
});
