import { View, Text, Button, StyleSheet } from 'react-native';

export default function PaginaInicial({ navigation }){
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Meu nome é Gabriel Rodrigues Carbone</Text>
        <Button title="Imagem da internet" onPress={() => navigation.navigate('internet')}/>
        <Button title="Imagem Local" onPress={() => navigation.navigate('local')}/>
        <Button title="Icones" onPress={() => navigation.navigate('icones')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold' }
    });