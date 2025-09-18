import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carlos Eduardo Silva de Olivera</Text>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Imagem Internet')}
      >
        <Text style={styles.textoBotao}>Ver Imagem Internet</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Imagem Local')}
      >
        <Text style={styles.textoBotao}>Ver Imagem Local</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Icone')}
      >
        <Text style={styles.textoBotao}>Ver Icones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginVertical: 10,
    minWidth: 200,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

