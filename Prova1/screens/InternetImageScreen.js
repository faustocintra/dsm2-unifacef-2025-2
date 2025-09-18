import { View, Image, Button, StyleSheet } from 'react-native';

export default function InternetImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/background/20230613/pngtree-times-square-in-new-york-image_2949820.jpg' }}
        style={styles.img}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  img: { width: 250, height: 250, marginBottom: 20 },
});
