import { View, Image, StyleSheet } from 'react-native';

export default function LocalImageScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/image.png')} 
        style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200 }
});
