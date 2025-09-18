import { View, Image, Button, StyleSheet } from 'react-native';

export default function InternetScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.imagem}
      />
      <Button title="Voltar à Home" onPress={() => navigation.navigate('Início')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#71b2ebff'
  },
  imagem: { width: 150, height: 150, marginBottom: 20 }
});