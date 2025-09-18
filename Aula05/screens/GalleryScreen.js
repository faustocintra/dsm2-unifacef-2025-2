import { StyleSheet, View, Image, ScrollView, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function GalleryScreen() {
  return (
    <View style={styles.container}>
      {/* Ícone de câmera com destaque */}
      <Ionicons name="camera" size={50} color="#4a90e2" style={styles.icon} />
      <Text style={styles.title}>Galeria</Text>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.imageCard}>
          <Image
            source={{ uri: "https://picsum.photos/id/16/300/200" }}
            style={styles.image}
          />
        </View>
        <View style={styles.imageCard}>
          <Image
            source={{ uri: "https://picsum.photos/id/15/300/200" }}
            style={styles.image}
          />
        </View>
        <View style={styles.imageCard}>
          <Image
            source={{ uri: "https://picsum.photos/id/1018/300/200" }}
            style={styles.image}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    alignItems: "center",
    paddingTop: 50,
  },
  icon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  scroll: {
    alignItems: "center",
    paddingBottom: 20,
  },
  imageCard: {
    width: 320,
    borderRadius: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
});