import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home Screen</Text>
      <Button style={styles.botao}
        title="Ir para Galeria"
        onPress={() => navigation.navigate('Galeria')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff' 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'black', 
    marginBottom: 20 
  },
  botao: {
    backgroundColor: "red"
  }
});
