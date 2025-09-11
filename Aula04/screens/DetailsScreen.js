import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>

      <View style={styles.botoes}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>

      <View style={styles.botoes}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate('Perfil')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  titulo: { fontSize: 24, color: '#007AFF', marginBottom: 12, fontWeight: '600' },
  botoes: { marginVertical: 6, width: 180 },
});
