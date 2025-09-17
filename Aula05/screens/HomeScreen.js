import React from 'react';
import { View, Button, StyleSheet, Image } from 'react-native'; // Adicionado Image

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.imagem} />
      <Button
        title="Perfil"
        onPress={() => navigation.navigate('Profile')}
      />
      <View style={styles.espaco} />
      <Button
        title="Ver Galeria"
        onPress={() => navigation.navigate('Galeria')}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  espaco: {
    marginVertical: 10,
  },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});