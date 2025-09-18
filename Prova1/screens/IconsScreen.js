import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function IconsScreen() {
  return (
    <Screen center>
      <View style={styles.row}>
        <Ionicons name="ios-star" size={56} color="#e67e22" />
        <FontAwesome name="heart" size={56} color="#c0392b" />
        <MaterialCommunityIcons name="thumb-up" size={56} color="#2980b9" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', width: '80%', justifyContent: 'space-between', alignItems: 'center' }
});
