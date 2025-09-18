import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function IconScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="logo-react" size={50} color="blue" />
      <FontAwesome name="star" size={50} color="orange" />
      <MaterialCommunityIcons name="rocket" size={50} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});