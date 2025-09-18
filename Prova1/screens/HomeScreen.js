import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Gabriel David Assed</Text>
      <View style={styles.botoes}>
        <Button
          title="Imagem Local"
          onPress={() => navigation.navigate('Imagem Local')}
        />
        <Button
          title="Imagem da Web"
          onPress={() => navigation.navigate('Imagem da Web')}
        />
        <Button title="Ícones" onPress={() => navigation.navigate('Ícones')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nome: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 24,
    marginTop: 24,
  },
  botoes: { gap: 12 },
});
