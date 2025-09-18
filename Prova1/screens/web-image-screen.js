import { Image} from 'expo-image'
import { View, StyleSheet, Button,Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function WebImageScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.importantText}> Imagem vinda da internet</Text>
        <Image
            style={styles.image}
            source={'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6438793/this-is-fine.jpg?quality=90&strip=all&crop=22.222222222222,0,55.555555555556,100'}/>
        <Button title="Me Pressione para voltar" onPress={_ => navigation.navigate("Landing")}/>

    </View>

  );
}
const styles = StyleSheet.create({
  importantText: { fontWeight: 'bold', fontSize: 24, color: '#fff'},
  image: { width: 250, height: 250},
  container: { backgroundColor: '#ff0055', flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24 },
  containerRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  imagem: { width: 200, height: 200, resizeMode: 'contain' }
});