import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={require("../assets/avatar.png")} style={styles.avatar} />
      </View>

      <Text style={styles.nome}>João Silva</Text>

      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="settings" size={30} color="#4a90e2" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatarContainer: {
    borderWidth: 3,
    borderColor: "#4a90e2",
    borderRadius: 100,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
  },
  iconButton: {
    backgroundColor: "#e1e4ea",
    padding: 12,
    marginTop: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});