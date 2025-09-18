import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function GalleryScreen2() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/rose.jpg')} style={styles.imagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imagem: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
});
