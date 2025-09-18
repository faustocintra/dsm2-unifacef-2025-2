import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function InternetImage({ navigation }) {
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2048px-React-icon.svg.png';
  //coloquei em uma variavel para tornar mais legivel e facilitar manutenção
  return (
    <View style={styles.container}>
      <Image source={imageUrl} />

      <TouchableOpacity 
        style={styles.botao} 
        onPress={() => navigation.navigate('Início')}
      >
        <Text style={styles.textoBotao}>Ver Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363346ff',
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

