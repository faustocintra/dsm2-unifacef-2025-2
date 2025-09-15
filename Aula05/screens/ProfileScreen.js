import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.nome}>Felipe Pucci</Text>

      {/* Ícone do Expo (Ionicons) */}
      <Ionicons name="settings" size={30} color="gray" />
      <Text style={styles.tip}>
        Dica: Você pode trocar o ícone e as cores em icons.expo.fyi
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  nome: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  tip: { marginTop: 8, fontSize: 12, color: '#666', textAlign: 'center' }
});

