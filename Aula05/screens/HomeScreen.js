import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image, View, Text, Button } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.imagem} />
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 100, height: 100 }}
      />
      <AntDesign name="frown" size={40} color="green" />
      <View style={styles.pageDetail}>
        <FontAwesome name="home" size={20} color="blue" />
        <Text style={styles.texto}>Página Inicial </Text>
      </View>
      <View style={styles.buttonList}>
        <Button
          title="Ir para Perfil"
          onPress={() => navigation.navigate("Perfil")}
        />
        <Button
          title="Ir para Galeria"
          onPress={() => navigation.navigate("Galeria")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imagem: { width: 200, height: 200, resizeMode: "contain" },
  texto: { fontSize: 12, marginTop: 4 },
  pageDetail: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 4,
    left: 8,
  },
  buttonList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "center",
    justifyContent: "center",
  },
});
