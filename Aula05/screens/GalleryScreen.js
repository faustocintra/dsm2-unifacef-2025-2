import { View, Image, StyleSheet, Button } from 'react-native';
export default function GalleryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://img.icons8.com/color/512/java-coffee-cup-logo--v2.png' }} style={{ width: 100, height: 100 }}/>
      <Image source={{ uri: 'https://skillforge.com/wp-content/uploads/2020/10/javascript-1817x2048.png' }} style={{ width: 100, height: 100 }}/>
      <Image source={{ uri: 'https://cdn-wcsm.alura.com.br/2025/04/img-01-20.png' }} style={{ width: 100, height: 100 }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 100, resizeMode: 'contain' }
});

