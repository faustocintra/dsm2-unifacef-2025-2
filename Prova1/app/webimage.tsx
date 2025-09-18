import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

export default function WebImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
      />
      <Link href="/" style={styles.link}>Voltar para a Primeira Tela</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: 'blue',
  }
});