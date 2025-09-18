import { View, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={40} color="purple" style={styles.icone} />

      <Image source={require('../assets/image.png')} style={styles.img} />
      <Image source={require('../assets/image1.png')} style={styles.img} />
      <Image source={require('../assets/image2.png')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  icone: { marginBottom: 20 },
  img: { width: 120, height: 120, margin: 10, borderRadius: 10 }
});