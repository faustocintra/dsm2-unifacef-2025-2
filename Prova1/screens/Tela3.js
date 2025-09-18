import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Tela3() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/minhaImagem.png')} // sua imagem local
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});
