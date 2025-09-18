import { View, Image, Button, StyleSheet } from "react-native";

export default function Tela2({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/300/200" }}
        style={{ width: 300, height: 200 }}
      />
      <Button title="Voltar para Início" onPress={() => navigation.navigate("Início")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "lightblue" },
});
