import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function GaleriaScreen(){
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  image: { width: 200, height: 200, resizeMode: 'contain' }
});
