import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function PerfilScreen({ navigation }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quadro</Text>
      <Image
        source={{ uri: 'https://picsum.photos/seed/p/600/400' }}
        style={styles.image}
      />
      <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', padding: 16, gap: 12 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 12 },
  image: { width: '100%', height: 200 }
});
