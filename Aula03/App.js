import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Bem-vindo ao EXPO!</Text>
      <Text style={styles.subtitle}>Teste</Text>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b9853ff', // fundo escuro moderno
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#56502fff', // dourado destaque
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#dbcdcdff',
    textAlign: 'center',
    marginBottom: 30,
  }
});
