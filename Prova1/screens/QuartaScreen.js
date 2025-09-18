import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

export default function QuartaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons name="bar-chart-outline" size={48} color="red" />
      <Ionicons name="briefcase-outline" size={48} color="green" />
      <Ionicons name="eye-off-outline" size={48} color="blue" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
