import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>Aula 03</Text>

      <Text style={styles.title}>Bem-vinda(o) ao meu app Expo 🎉</Text>
      <Text style={styles.subtitle}>
        Agora rodando no VS Code, com visual repaginado.
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Explorar</Text>
      </TouchableOpacity>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A', // azul bem escuro (slate)
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    gap: 12,
  },
  badge: {
    position: 'absolute',
    top: 60,
    backgroundColor: '#22C55E',
    color: '#0F172A',
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  title: {
    color: '#E2E8F0',
    fontSize: 26,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#22C55E',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: '#0F172A',
    fontWeight: '800',
    fontSize: 16,
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
});
