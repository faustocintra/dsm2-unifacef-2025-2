import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      {/* Ícone de câmera no topo */}
      <Ionicons name="camera" size={48} color="purple" style={styles.icon} />

      {/* Três imagens da internet */}
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/300/200?random=1' }}
      />
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/300/200?random=2' }}
      />
      <Image
        style={styles.image}
        source={{ uri: 'https://picsum.photos/300/200?random=3' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  icon: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
    borderRadius: 10,
  },
});
