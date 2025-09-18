import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScrenn({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Thúlio Almeida Ferreira</Text>
      <Button title="Ver Imagem da Internet" onPress={() => navigation.navigate('Imagem da Internet')} />
      <Button title="Ver Imagem Local" onPress={() => navigation.navigate('Imagem Local')} />
      <Button title="Ver Ícones" onPress={() => navigation.navigate('Ícones')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, marginBottom: 20 },
});
