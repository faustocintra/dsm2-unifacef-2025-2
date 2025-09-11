import { StyleSheet, Image, View, Text, Button } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function GaleryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topIcon}>
        <AntDesign name="camera" size={50} color="blue" />
      </View>
      <Image
        source={{
          uri: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
        }}
        style={{ width: 100, height: 100 }}
      />

      <Image
        source={{
          uri: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",
        }}
        style={{ width: 100, height: 150 }}
      />
      <Image
        source={{
          uri: "https://w7.pngwing.com/pngs/616/528/png-transparent-angularjs-typescript-javascript-vue-js-others-blue-angle-text-thumbnail.png",
        }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imagem: { width: 200, height: 200, resizeMode: "contain" },
  texto: { fontSize: 12, marginTop: 4 },
  topIcon: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    left: 0,
    right: 0,
  },
});
