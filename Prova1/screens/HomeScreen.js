import { View, Button, StyleSheet } from 'react-native';
import { Text } from 'react-native-web';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Pedro Gomes de Almeida</Text>
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Ir para a Pagina com Imagem da Web" onPress={() => navigation.navigate('ImageWeb')} />
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Ir para a Pagina com Imagem Local" onPress={() => navigation.navigate('LocalImage')} />
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Ir para a Pagina com Icones" onPress={() => navigation.navigate('IconsScreen')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 20,
        fontStyle: 'normal',
    }
});