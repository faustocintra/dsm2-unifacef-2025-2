import { ScrollView, View, Image, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function GalleryScreen() {
  const images = [
    'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?w=600',
    'https://images.unsplash.com/photo-1503264116251-35a269479413?w=600',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600'
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="camera" size={36} color="#2563EB" />
        <Text style={styles.title}>Galeria</Text>
      </View>
      <View style={styles.grid}>
        {images.map((uri) => (
          <Image key={uri} source={{ uri }} style={styles.image} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, backgroundColor: '#0F1115', flexGrow: 1 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '700', color: '#fff' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12 },
  image: { width: '48%', aspectRatio: 1, borderRadius: 12, backgroundColor: '#1E2630' }
});
