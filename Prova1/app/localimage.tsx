import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('/workspaces/dsm2-unifacef-2025-2/Prova1/assets/images/icon.png')}
        style={styles.image}
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
  image: {
    width: 200,
    height: 200,
  },
});