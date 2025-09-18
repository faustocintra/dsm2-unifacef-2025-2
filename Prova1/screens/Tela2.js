import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';

export default function Tela2({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: '#add8e6' }]}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 20 },
});
