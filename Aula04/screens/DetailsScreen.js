import { View, Text, StyleSheet, Button } from 'react-native';
export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Detalhes</Text>
            <View style={styles.buttonsContainer}>
                <Button title="Voltar" onPress={() => navigation.goBack()} />
                <Button title="Ir para Perfil" onPress={() => navigation.navigate('Perfil')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    buttonsContainer: { display: 'flex', flexDirection: 'row', gap: 10 },
    titulo: { fontSize: 24, color: '#007AFF' }
});