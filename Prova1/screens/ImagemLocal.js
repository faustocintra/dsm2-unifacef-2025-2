import { View, Image, StyleSheet } from 'react-native';

export default function ImagemLocal() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/bolo.jpg')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
});

