import { Image} from 'expo-image'
import { View, StyleSheet, Button,Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function LocalImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../assets/imagem-local.jpeg')}/>
        <Button title="Me Pressione para voltar" onPress={_ => navigation.navigate("Landing")}/>
    </View>

  );
}
const styles = StyleSheet.create({
  image: { width: 250, height: 250},
  container: { flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24 },
  containerRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});