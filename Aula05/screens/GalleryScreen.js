
import { ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Ionicons name="camera" size={36} color="tomato" style={{ marginBottom: 12 }} />

      <Image source={{ uri: 'https://picsum.photos/seed/pic1/400/300' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/seed/pic2/400/300' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/seed/pic3/400/300' }} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 16 },
  image: { width: 350, height: 220, resizeMode: 'cover', marginVertical: 10, borderRadius: 8 }
});