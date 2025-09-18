import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Ionicons, FontAwesome } from '@expo/vector-icons';

export default function IconsScreen(){
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Ionicons name="settings" size={44} color="#f4a261" />
        <Ionicons name="alert" size={44} color="#e63946" />
        <Ionicons name="checkmark-circle" size={44} color="#2a9d8f" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  row: { width: '80%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }
});
