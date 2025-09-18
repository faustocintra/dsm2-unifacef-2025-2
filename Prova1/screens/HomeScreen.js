import React from 'react';
import { View,Text,Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Agnyh Helena B R B de Souza</Text>
      <Button
        title="Galeria - URL"
        onPress={() => navigation.navigate('Galeria - URL')}
      />
      <Button
        title="Galeria - Local"
        onPress={() => navigation.navigate('Galeria - Local')}
      />
      <Button
        title="Icons"
        onPress={() => navigation.navigate('Icons')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  titulo: { fontSize: 24, fontWeight: 'bold' }
});
