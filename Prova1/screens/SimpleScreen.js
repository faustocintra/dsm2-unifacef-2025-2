import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SimpleScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://external-preview.redd.it/0UF4Gqxwe330DKxNz1_GpmkwIDX0e_TyJdXbbkDVm78.jpg?width=640&crop=smart&auto=webp&s=9acdc0d2e2e8e98861b235a29ac674ed3397e10f' }}
                style={{ width: 300, height: 300, borderRadius: '25px' }}
            />

            <TouchableOpacity //Usei novamente pela estilização
                style={styles.botao}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.textoBotao}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'lightblue', gap: 10 },
    avatar: { width: 100, height: 100, borderRadius: 50 },
    nome: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
    botao: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
    },
    textoBotao: { color: '#fff', fontSize: 16, textAlign: 'center' },
});
