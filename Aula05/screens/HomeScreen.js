import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <FontAwesome name="home" size={40} color="blue" />
            <Text style={styles.titulo}>Tela Inicial</Text>
            <View style={styles.botoes}>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <Text style={styles.textoBotao}>Ir para Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => navigation.navigate('Galeria')}
                >
                    <Text style={styles.textoBotao}>Ir para Galeria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 20, marginTop: 10 },
    botoes: { flexDirection: 'row', gap: 10, padding: 10 },
    botao: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
    },
    textoBotao: { color: '#fff', fontSize: 16 },
});
