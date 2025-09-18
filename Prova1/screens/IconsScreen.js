import { View, StyleSheet, Text } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function IconsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Três Ícones</Text>
      <View style={styles.row}>
        <Ionicons name="camera" size={64} color="#e63946" />
        <MaterialIcons name="favorite" size={64} color="#2a9d8f" />
        <FontAwesome name="rocket" size={64} color="#264653" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16, backgroundColor: '#fff' },
  title: { textAlign: 'center', fontSize: 20, fontWeight: '600', marginBottom: 16 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
});
