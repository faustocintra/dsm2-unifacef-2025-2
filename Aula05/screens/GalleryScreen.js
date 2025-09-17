import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="camera" size={40} color="#4F8EF7" style={styles.icon} />
      </View>
      <View style={styles.imagesContainer}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' }}
          style={styles.image}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4F8EF7',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
});
