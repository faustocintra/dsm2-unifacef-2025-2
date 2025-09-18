import { StyleSheet } from "react-native";
import { View, Image, Button } from "react-native";

const NetworkScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
        }}
        style={{ width: 100, height: 100 }}
      />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NetworkScreen;
