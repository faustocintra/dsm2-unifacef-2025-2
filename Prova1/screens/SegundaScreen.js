import { Button, Image, StyleSheet, View } from 'react-native';

export default function SegundaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.hipercultura.com/imagens/composicao-da-atmosfera-da-terra-2.jpg',
        }}
        style={styles.img}
      />
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    backgroundColor: '#eef6ff',
  },
  img: { width: 160, height: 160 },
});
