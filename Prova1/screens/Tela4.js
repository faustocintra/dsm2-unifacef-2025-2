import { View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Tela4() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={40} color="red" />
      <Ionicons name="person" size={40} color="green" />
      <Ionicons name="settings" size={40} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around", flex: 1, alignItems: "center" },
});
