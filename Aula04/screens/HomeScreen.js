import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff' // mantém padrão entre telas
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#007AFF', // mesma cor usada no DetailsScreen
    marginBottom: 20 // espaço entre título e botão
  }
});
