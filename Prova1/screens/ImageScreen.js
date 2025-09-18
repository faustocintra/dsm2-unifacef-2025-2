import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/300/200" }}
        style={styles.image}
        resizeMode="cover"
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E8F4FD", // Cor de fundo diferente de branco (azul claro)
    padding: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: "#FF6B6B",
    padding: 15,
    borderRadius: 8,
    minWidth: 120,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
