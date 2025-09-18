import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>KAIKI ANDRADE SILVA</Text>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Imagens')}
      >
        <Text style={styles.textoBotao}>Imagens</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Imagen_local')}
      >
        <Text style={styles.textoBotao}>Imagem local</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Icone')}
      >
        <Text style={styles.textoBotao}>Ícones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    color: '#000',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 10,
  },
  textoBotao: {
    color: '#fff',
  },
});
