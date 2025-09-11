import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>
      <Text style={styles.info}>Aqui você pode colocar dados do usuário, foto, etc.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, gap: 8 },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50' },
  info: { fontSize: 16, textAlign: 'center', opacity: 0.8 },
});
