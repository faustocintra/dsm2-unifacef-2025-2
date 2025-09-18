import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FontAwesome name="user" size={40} color="blue" />
            <Text style={styles.titulo}>Rodrigo Silva Castro</Text>
            <View style={styles.botoes}>
                <TouchableOpacity //Decidi usar Touchable para poder estilizar os botões
                    style={styles.botao}
                    onPress={() => navigation.navigate('Simples')}
                >
                    <Text style={styles.textoBotao}>Imagem Simples</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Tela Cheia')}
                >
                    <Text style={styles.textoBotao}>Imagem em Tela Cheia</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Ícones')}
                >
                    <Text style={styles.textoBotao}>Ícones em Linha</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 20, marginTop: 10 },
    botoes: { flexDirection: 'collumn', gap: 10, padding: 10 },
    botao: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40
    },
    textoBotao: { color: '#fff', fontSize: 16, textAlign: 'center' },
});
