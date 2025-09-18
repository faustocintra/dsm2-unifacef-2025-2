import { View, Image, StyleSheet, Button } from 'react-native';

export default function InternetImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        // Imagem pública (Wikimedia) - link direto do arquivo
        source={{ uri: 'https://sbraceengineering.co.uk/wp-content/uploads/Ferrari-Enzo.jpg' }}
        style={styles.image}
      />
      <View style={{ height: 12 }} />
      <Button title="Voltar para Início" onPress={() => navigation.navigate('Início')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ff9595ff', padding: 16 },
  image: { width: 180, height: 180, borderRadius: 8 }
});
