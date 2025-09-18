import { StyleSheet, Image, View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Luís Felipe Mozer Chiqueto</Text>
      <View style={styles.buttonList}>
        <Button
          title="Imagem da internet"
          onPress={() => navigation.navigate("Network")}
        />
        <Button
          title="Imagem Local"
          onPress={() => navigation.navigate("Local")}
        />
        <Button title="Ícones" onPress={() => navigation.navigate("Icons")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imagem: { width: 200, height: 200, resizeMode: "contain" },
  texto: { fontSize: 16, fontWeight: 700 },

  buttonList: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "center",
    justifyContent: "center",
  },
});
