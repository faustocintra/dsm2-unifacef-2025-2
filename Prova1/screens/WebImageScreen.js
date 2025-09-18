import { Button, Image, StyleSheet, View } from 'react-native';

export default function WebImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/I/81gsSy5r13L.png',
        }}
        style={styles.img}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: 'lightyellow',
    flex: 1,
  },
  img: { width: 500, height: 500 },
});
