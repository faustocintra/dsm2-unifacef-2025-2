import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=800' }}
          style={styles.image}
        />
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800' }}
          style={styles.image}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scroll: { alignItems: 'center', paddingVertical: 16 },
  image: { width: '70%', height: 140, marginBottom: 12, borderRadius: 10 }
});
