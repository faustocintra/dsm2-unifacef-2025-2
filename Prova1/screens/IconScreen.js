import React from 'react';
import { View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function IconScreen() {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={50} color="blue" />
      <FontAwesome name="user" size={50} color="green" />
      <FontAwesome name="bell" size={50} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',       
    justifyContent: 'space-around', 
    alignItems: 'center',       
    backgroundColor: '#f5f5f5',
  },
});
