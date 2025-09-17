import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Inicial</Text>
      <Ionicons name="home" size={40} color="blue" style={styles.icone} />
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.textoBotao}>Ver Perfil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Galeria')}
      >
        <Text style={styles.textoBotao}>Ver Galeria</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  icone: {
    marginBottom: 30,
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

