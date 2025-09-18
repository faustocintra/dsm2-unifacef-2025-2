import { View, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function IconsScreen() {
  return (
    <View style={styles.container}>
      <MaterialIcons name="star" size={40} color="pink" style={styles.icon} />
      <FontAwesome name="home" size={40} color="blue" style={styles.icon} />
      <Ionicons name="heart" size={40} color="purple" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  icon: {
    marginHorizontal: 10,
  },
});
