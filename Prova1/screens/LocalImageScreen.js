import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../components/Screen';

export default function LocalImageScreen() {
  return (
    <Screen center>
      <Image source={require('../assets/local.png')} style={styles.imagem} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  imagem: { width: 250, height: 250, resizeMode: 'contain' }
});
// A imagem é carregada de um arquivo local e exibida centralizada  