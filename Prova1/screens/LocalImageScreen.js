import { View, Image, StyleSheet, Text } from 'react-native';

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagem Local</Text>
      <Image
        source={require('../assets/icon.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff', padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
  image: { width: 260, height: 260, resizeMode: 'contain' },
});
