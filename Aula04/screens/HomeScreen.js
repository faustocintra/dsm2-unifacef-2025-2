import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Text style={styles.subtitulo}>Bem-vindo! 🚀</Text>

      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12, padding: 16 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
  subtitulo: { fontSize: 16, opacity: 0.7, marginBottom: 8 },
});
