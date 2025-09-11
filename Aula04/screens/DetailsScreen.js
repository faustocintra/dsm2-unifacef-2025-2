import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation }) {
  // Pequena personalização no título do header
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'ℹ️ Detalhes',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Informações da Tela de Detalhes</Text>
      <Text style={styles.subtitulo}>
        Aqui você pode visualizar mais detalhes sobre o item selecionado.
      </Text>

      <Text style={styles.link} onPress={() => navigation.navigate('Perfil', { nome: 'Igor' })}>
        👉 Ir para Perfil
      </Text>

      <Text style={styles.linkVoltar} onPress={() => navigation.goBack()}>
        ⬅️ Voltar
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6', // fundo claro
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F172A', // azul escuro
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    fontSize: 16,
    color: '#2563EB',
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
  linkVoltar: {
    fontSize: 16,
    color: '#DC2626',
    textDecorationLine: 'underline',
  },
});
