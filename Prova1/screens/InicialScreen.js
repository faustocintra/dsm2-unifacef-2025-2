import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function InicialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem do avatar */}
      <Image source={require('../assets/avatar.png')} style={styles.avatar} />
      
      <Text style={styles.nome}>Diego Murari</Text>
      
      <View style={styles.buttonRow}>
        <Button title="Ir p/ Internet" onPress={() => navigation.navigate('Internet')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Ir p/ Imagem Local" onPress={() => navigation.navigate('Local')} />
      </View>
      <View style={styles.buttonRow}>
        <Button title="Ir p/ Ícones" onPress={() => navigation.navigate('Icones')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  nome: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  buttonRow: { width: '80%', marginVertical: 6 }
});
// Tela inicial com avatar, nome e botões de navegação