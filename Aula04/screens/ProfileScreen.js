import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Leonardo Ferreira de Sousa</Text>
      <Text style={styles.info}>Estudante de Engenharia de Software</Text>
      <Text style={styles.info}>React Native | Dev. Mobile II 🚀</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar para Início" onPress={() => navigation.navigate('Início')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: '#555',
  },
});
