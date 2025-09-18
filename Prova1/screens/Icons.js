import { View, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function InternetImage({ navigation }) {
  return (
    <View style={styles.container}>
        <Ionicons name="home" size={40} color="red" style={styles.icone} />
        <Ionicons name="home" size={40} color="green" style={styles.icone} />
        <Ionicons name="home" size={40} color="blue" style={styles.icone} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

