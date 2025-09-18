import { View, Image, StyleSheet } from "react-native";

export default function Tela3() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo_raiders.png")} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  img: { width: 200, height: 200, resizeMode: "contain" },
});
