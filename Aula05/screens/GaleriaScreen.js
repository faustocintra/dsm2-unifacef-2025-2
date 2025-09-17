import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GaleriaScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="camera" size={35} color="#FF6B35" />
        <Text style={styles.titulo}>Galeria de Fotos</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.imagemContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/300/200?random=1' }} 
            style={styles.imagem} 
          />
          <Text style={styles.legenda}>Paisagem Natural</Text>
        </View>
        
        <View style={styles.imagemContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/300/200?random=2' }} 
            style={styles.imagem} 
          />
          <Text style={styles.legenda}>Arquitetura Moderna</Text>
        </View>
        
        <View style={styles.imagemContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/300/200?random=3' }} 
            style={styles.imagem} 
          />
          <Text style={styles.legenda}>Arte Urbana</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  imagemContainer: {
    marginBottom: 25,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  legenda: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#555',
  },
});

