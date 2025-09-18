import React from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';
import Screen from '../components/Screen';

export default function InternetScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.bg}>
        <Image source={require('../assets/logo.png')} style={styles.imagem} />
        <View style={styles.voltar}>
          <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent:'center', alignItems:'center', width: '100%', backgroundColor: '#f0f7ff' },
  imagem: { width: 150, height: 150, marginBottom: 20, resizeMode: 'contain' },
  voltar: { width: '60%' }
});
