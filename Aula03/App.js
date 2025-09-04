import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alteração no projeto para atividade da Aula 04</Text>
      <Text style={styles.subtitle}>Design e Textos alterados.</Text>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1e1e', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20, 
  },
  title: {
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginBottom: 8, 
  },
  subtitle: {
    fontSize: 18, 
    color: '#a0a0a0', 
  },
});
