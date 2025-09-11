import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen({ route, navigation }) {
  const nome = route?.params?.nome ?? 'Usuário';

  // Pequena personalização no título do header
  useLayoutEffect(() => {
    navigation.setOptions({
      title: `👤 Perfil`,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, {nome}!</Text>
      <Text style={styles.subtitulo}>Este é o seu espaço pessoal no app.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9FAFB', // fundo neutro
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563EB', // azul chamativo
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#4B5563', // cinza suave
  },
});
