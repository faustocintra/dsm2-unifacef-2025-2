import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconsScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={40} color="#e74c3c" />
      <Ionicons name="star" size={40} color="#27ae60" />
      <Ionicons name="settings" size={40} color="#2980b9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
