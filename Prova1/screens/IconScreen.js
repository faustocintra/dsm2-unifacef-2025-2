import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function IconScreen() {
  return (
    <View style={styles.container}>
      <Ionicons name="game-controller" size={48} color="#f7b538" />
      <Ionicons name="film" size={48} color="#db7c26" />
      <Ionicons name="fish" size={48} color="#d8572a" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
