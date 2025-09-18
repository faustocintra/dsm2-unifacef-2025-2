import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function IconsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="favorite" size={60} color="#4ECDC4" />
        <MaterialIcons name="home" size={60} color="#FFA500" />
        <MaterialIcons name="alarm" size={60} color="#8A2BE2" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 250, // Define uma largura fixa para garantir espaçamento igual
  },
});
