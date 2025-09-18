import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const IconsScreen = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="home" size={40} color="red" />
      <FontAwesome name="amazon" size={40} color="green" />
      <FontAwesome name="audio-description" size={40} color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default IconsScreen;
