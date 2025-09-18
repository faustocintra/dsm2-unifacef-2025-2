import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Tela4() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={50} color="red" />
      <FontAwesome name="user" size={50} color="green" />
      <FontAwesome name="cog" size={50} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
});
