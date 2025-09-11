import { View, Image, StyleSheet, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function GaleriaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={40} color="#4a90e2" style={styles.icone} />
      <Image
        style={styles.imagem}
        source={{ uri: "https://picsum.photos/300/200?random=1" }}
      />
      <Image
        style={styles.imagem}
        source={{ uri: "https://picsum.photos/300/200?random=2" }}
      />
      <Image
        style={styles.imagem}
        source={{ uri: "https://picsum.photos/300/200?random=3" }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});