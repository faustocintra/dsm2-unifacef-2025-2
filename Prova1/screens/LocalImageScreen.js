import { View, Image, StyleSheet } from 'react-native';

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/image.jpg')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  img: { width: 200, height: 200, resizeMode: 'contain' },
});
