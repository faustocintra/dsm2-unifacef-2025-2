import { View, Text, StyleSheet, Button } from 'react-native';
export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela de Detalhes</Text>
            <Button style={styles.buttom} title="Perfil" onPress={() => navigation.navigate('Perfil')} />
            <Button style={styles.buttom} title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
    2
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, color: '#007AFF' },
    buttom: {marginBottom: '5'}
});