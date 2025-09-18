import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={45} color="purple" style={styles.icon} />

      <Image style={styles.image} source={{ uri: 'https://static.todamateria.com.br/upload/pa/rt/partesdaflor-cke.jpg' }} />

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 43,
    backgroundColor: '#6985e0ff',
  },
  icon: { marginBottom: 20 },
  image: {
    width: 320,
    height: 320,
    marginVertical: 10,
    borderRadius: 10,
  },
});
