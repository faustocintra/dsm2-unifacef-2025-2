import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GaleriaScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={40} color="#007AFF" style={styles.cameraIcon} />
      <Image source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' }} style={styles.img} />
      <Image source={{ uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' }} style={styles.img} />
      <Image source={{ uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' }} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  cameraIcon: { marginBottom: 20 },
  img: { width: 120, height: 120, margin: 10, borderRadius: 10 },
});
