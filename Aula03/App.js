import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [count, setCount] = useState(0); // State para o contador

  // Função para incrementar o contador
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contagem: {count}</Text>
      
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Clique para aumentar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB6C1', // Fundo rosado claro
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#D5006D', // Cor de texto no contador (rosa escuro)
    marginBottom: 20,
    fontFamily: 'Roboto', // Fonte personalizada
  },
  button: {
    backgroundColor: '#FF1493', // Cor do botão (rosa vibrante)
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#FFEB3B', // Cor do brilho amarelo
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 15, // Somente no Android
    animation: 'glow 1.5s ease-in-out infinite', // Animação de brilho
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto', // Fonte personalizada
  },
});
