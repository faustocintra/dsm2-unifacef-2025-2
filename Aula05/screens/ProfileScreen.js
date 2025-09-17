import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://via.placeholder.com/100x100/4285F4/FFFFFF?text=JS' }} 
        style={styles.avatar} 
      />
      <Text style={styles.nome}>João Silva</Text>
      <Ionicons name="settings" size={30} color="gray" />
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
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50,
    marginBottom: 20,
  },
  nome: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    marginVertical: 10,
  }
});

