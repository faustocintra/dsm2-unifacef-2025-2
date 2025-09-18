import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function InternetImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Imagem da Internet</Text>

      <Image
        source={{ uri: 'https://picsum.photos/600/400' }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Início')}>
        <Text style={styles.btnText}>Voltar para Início</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2e9e4', alignItems: 'center', justifyContent: 'center', padding: 16 },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 12 },
  image: { width: '90%', height: 250, borderRadius: 8, resizeMode: 'contain' },
  btn: { marginTop: 16, paddingVertical: 12, paddingHorizontal: 20, backgroundColor: '#22223b', borderRadius: 8 },
  btnText: { color: '#fff', fontWeight: '600' },
});
