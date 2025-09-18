import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GaleriaScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="camera" size={72} color="lightblue" />
      <Text style={styles.nome}>Galeria</Text>
      <Image
        source={{ uri: 'https://www.ahnegao.com.br/wp-content/uploads/2024/10/imgaleat-6ke-2.jpg' }}
        style={{ width: 150, height: 150 }}
      />
      <Image
        source={{ uri: 'https://www.ahnegao.com.br/wp-content/uploads/2025/02/imgaleat-6jx-1.jpg' }}
        style={{ width: 150, height: 150 }}
      />
      <Image
        source={{ uri: 'https://www.ahnegao.com.br/wp-content/uploads/2021/11/aleat-pic-1.jpg' }}
        style={{ width: 150, height: 150 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", gap: 15 },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  nome: { fontSize: 22, fontWeight: "bold", marginVertical: 10 },
});
