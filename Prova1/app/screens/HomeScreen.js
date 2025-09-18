import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Eduardo Alberto Cintra 24777</Text>

      <Button
        title="Ir para Imagem da Internet"
        onPress={() => navigation.navigate('Internet')}
      />
      <Button
        title="Ir para Imagem Local"
        onPress={() => navigation.navigate('Local')}
      />
      <Button
        title="Ir para Ícones"
        onPress={() => navigation.navigate('Ícones')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' }
});
