// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// route.params nos permite receber os dados passados pela navegação
export default function WelcomeScreen({ route }) {
  // Pegamos o 'nome' ou 'email' que foi enviado da tela anterior
  const { nome, email } = route.params || {};
  const displayName = nome || email; // Mostra o nome se existir, senão o email

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo(a)!</Text>
      <Text style={styles.subtitle}>Login realizado com sucesso!</Text>
      <Text style={styles.data}>Usuário: {displayName}</Text>
      
      {/* Mostraremos mais dados aqui no desafio final */}
      {route.params.telefone && (
        <Text style={styles.data}>Telefone: {route.params.telefone}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6f7ff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 20,
  },
  data: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: 5,
  },
});