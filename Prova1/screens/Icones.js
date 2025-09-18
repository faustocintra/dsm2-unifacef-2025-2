import { View, Text, Button, StyleSheet } from 'react-native';

export default function Icones(){
    return(
         <View style={styles.container}>
            <Image source={require('../assets/android.png')} style={styles.imagem} />
            <Image source={require('../assets/celular.png')} style={styles.imagem} />
            <Image source={require('../assets/computador.png')} style={styles.imagem} />
         </View>
    )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imagem: { width: 200, height: 100, resizeMode: 'contain' }
});