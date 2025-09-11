import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <FontAwesome name="user" size={18} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.buttonText}>Ir para Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.navigate('Gallery')}
      >
        <FontAwesome name="image" size={18} color="#2563EB" style={{ marginRight: 8 }} />
        <Text style={[styles.buttonText, { color: '#2563EB' }]}>Abrir Galeria</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#0F1115', gap: 20 },
  logo: { width: 160, height: 160, resizeMode: 'contain' },
  title: { fontSize: 24, fontWeight: '700', color: '#fff' },
  button: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#2563EB', paddingHorizontal: 20, paddingVertical: 14, borderRadius: 10 },
  secondaryButton: { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#2563EB' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' }
});
