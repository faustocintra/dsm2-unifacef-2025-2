import { FontAwesome } from '@expo/vector-icons';
import {Button, View, Image, StyleSheet } from 'react-native';
export default function HomeScreen({navigation}) {
 return (
 <View style={styles.container}>
 <Image source={require('../assets/logo.png')} style={styles.imagem} />
 <Image
 source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
 style={{ width: 100, height: 100 }}
/>
<FontAwesome name='home' size={40} color='blue'/>
<FontAwesome name='rebel' size={40} color='red'/>
<Button title= 'Ir para perfil' onPress={()=>navigation.navigate('Perfil')}/>
 <Button title = 'Ir para galeria' onPress={()=>navigation.navigate('Galeria')}/>
 </View>
 );
}
const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 imagem: { width: 200, height: 200, resizeMode: 'contain' }
});