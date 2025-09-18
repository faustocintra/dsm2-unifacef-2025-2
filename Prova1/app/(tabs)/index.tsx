import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gabriel Piccirillo</Text>
      
      <Link href="/webimage" style={styles.link}>Tela 2 (Imagem Web)</Link>
      <Link href="/localimage" style={styles.link}>Tela 3 (Imagem Local)</Link>
      <Link href="/icons" style={styles.link}>Tela 4 (Ícones)</Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    link: {
        marginVertical: 10,
        fontSize: 16,
        color: 'blue',
    }
});