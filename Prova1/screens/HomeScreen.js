import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Amanda Alves de Souza</Text>
      <Button title="Imagem Internet" onPress={() => navigation.navigate('InternetImage')} />
      <Button title="Imagem Local" onPress={() => navigation.navigate('LocalImage')} />
      <Button title="Ícones" onPress={() => navigation.navigate('IconsScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  nome: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
});
