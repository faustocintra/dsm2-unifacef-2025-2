import { View, Image, StyleSheet } from 'react-native';

export default function ImgLoc() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200 },
});
