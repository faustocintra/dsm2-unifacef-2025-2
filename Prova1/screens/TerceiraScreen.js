import { Image, StyleSheet, View } from 'react-native';

export default function TerceiraScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/lua.jpg')} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  img: { width: 200, height: 200 },
});
