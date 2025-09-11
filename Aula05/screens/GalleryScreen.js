// screens/GalleryScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
// subtrai 60 = padding horizontal total (20+20) + espaçamentos entre imagens (~20)
const IMAGE_SIZE = Math.round((screenWidth - 60) / 3);

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={36} color="purple" style={styles.icon} />
      <Text style={styles.titulo}>Minha Galeria</Text>

      <View style={styles.galeriaRow}>
        <Image
          source={{ uri: 'https://picsum.photos/id/1015/400/400' }}
          style={[styles.imagem, { width: IMAGE_SIZE, height: IMAGE_SIZE }]}
        />
        <Image
          source={{ uri: 'https://picsum.photos/id/1016/400/400' }}
          style={[styles.imagem, { width: IMAGE_SIZE, height: IMAGE_SIZE }]}
        />
        <Image
          source={{ uri: 'https://picsum.photos/id/1025/400/400' }}
          style={[styles.imagem, { width: IMAGE_SIZE, height: IMAGE_SIZE }]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
    backgroundColor: '#fff'
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 8
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 14
  },
  galeriaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  imagem: {
    borderRadius: 8,
    backgroundColor: '#e9e9e9' // placeholder enquanto carrega
  }
});
