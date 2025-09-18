import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gabriel fErnandes Pacheco</Text>
      <View style={{ height: 12 }} />
      <Button title="Ir para Imagem da Internet" onPress={() => navigation.navigate('Internet')} />
      <View style={{ height: 12 }} />
      <Button title="Ir para Imagem Local" onPress={() => navigation.navigate('Local')} />
      <View style={{ height: 12 }} />
      <Button title="Ir para Ícones" onPress={() => navigation.navigate('Ícones')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 22, fontWeight: 'bold' }
});
