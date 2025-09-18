import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function TresIcones() {
  return (
    <View style={styles.container}>
      <FontAwesome name="flag" size={50} color="#000dffff" />
      <FontAwesome name="car" size={50} color="#2ecc71" />
      <FontAwesome name="camera" size={50} color="#ff0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
