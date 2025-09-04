import { View, Text, StyleSheet, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Detalhes</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo: { fontSize: 24, color: '#007AFF', marginBottom: 20 },
  buttonContainer: { gap: 10 }
});
