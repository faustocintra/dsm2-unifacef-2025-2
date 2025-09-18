import { View, Text, StyleSheet, Image, Button } from 'react-native'; 

export default function Tela3({ navigation }) {
 return (
 <View style={styles.container}>
 <Image source={require('../assets/unifacef.png')} style={styles.imagem} />
 </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 imagem: { width: 300, height: 300, resizeMode: 'contain' }
});
