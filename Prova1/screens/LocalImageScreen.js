import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function LocalImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/dogzao.jpg")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Alinha verticalmente no centro
    alignItems: "center", // Alinha horizontalmente no centro
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
  },
});
