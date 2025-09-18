import { View, Image, StyleSheet } from 'react-native';

const LocalImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Pikachu-PNG-Clipart.png')}
        style={styles.image}
      />
    </View>
  );
};

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

export default LocalImage;
