import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";

export default function GalleryScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Três imagens diferentes da internet */}
      <Image
        source={{ uri: "https://picsum.photos/seed/guizii1/800/500" }}
        style={styles.img}
      />
      <Image
        source={{ uri: "https://picsum.photos/seed/guizii2/800/500" }}
        style={styles.img}
      />
      <Image
        source={{ uri: "https://picsum.photos/seed/guizii3/800/500" }}
        style={styles.img}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: "center", backgroundColor: "#fff" },
  img: {
    width: "100%",
    height: 220,
    borderRadius: 12,
    marginBottom: 12,
  },
});
