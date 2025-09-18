import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Túlio Teixeira Silva</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('InternetImage')}>
        <Text style={styles.btnText}>Ir para Imagem da Internet</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('LocalImage')}>
        <Text style={styles.btnText}>Ir para Imagem Local</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Icons')}>
        <Text style={styles.btnText}>Ir para Ícones</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '600', marginBottom: 20 },
  btn: { width: '90%', padding: 14, backgroundColor: '#1f6feb', borderRadius: 8, marginTop: 10 },
  btnText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});
