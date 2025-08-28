import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/favicon.png')} style={styles.imagem} />
      <View style={styles.container2}>
        <Text style={styles.textoContador}>Contador: {contador}</Text>
        <View style={styles.caixaBotoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador(contador + 1)}>
            <Text style={styles.textoBotao}>Aumentar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => setContador(contador - 1)}>
            <Text style={styles.textoBotao}>Diminuir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa a tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  container2: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  caixaBotoes: {
    flexDirection: 'row',
    marginTop: 20,
  },

  imagem: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },

  botao: {
    margin: 10,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'gray',
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },

  textoContador: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
