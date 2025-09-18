import { View, Image, Button, StyleSheet } from 'react-native';

export default function ImgInt({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
      />
      <Button title="Voltar ao Início" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#87ceeb', justifyContent: 'center', alignItems: 'center' },
  image: { width: 150, height: 150, marginBottom: 20 },
});
