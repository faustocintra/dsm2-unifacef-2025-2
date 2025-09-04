import { View, Text, StyleSheet } from "react-native";

export default function Perfil() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela de Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  titulo: { fontSize: 24, color: "#FF5733", fontWeight: "bold" },
});