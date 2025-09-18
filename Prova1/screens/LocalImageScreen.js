import { Image, StyleSheet, View } from 'react-native';

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/freefire.jpeg')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  img: { width: 300, height: 300 },
});
