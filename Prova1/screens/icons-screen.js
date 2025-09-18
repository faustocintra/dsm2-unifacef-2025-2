import { Image} from 'expo-image'
import { View, StyleSheet, Button,Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconsScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Ionicons name="planet" size={24} color="#a0f" />
        <Ionicons name="paper-plane" size={24} color="#599" />
        <Ionicons name="airplane" size={24} color="#775" />
    </View>


  );
}
const styles = StyleSheet.create({
  image: { width: 250, height: 250},
  container: { flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', gap: 24 },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});