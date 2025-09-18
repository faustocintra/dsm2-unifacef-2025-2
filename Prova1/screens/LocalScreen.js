import { StyleSheet } from "react-native";
import { View, Image } from "react-native";

const LocalScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Prova.jpg")}
        style={{ width: "90%", height: "70%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LocalScreen;
