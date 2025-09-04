import { View, Text, StyleSheet, Button } from 'react-native';

export default function PerfilScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela do Perfil</Text>
            <Button title="Voltar para detalhes" onPress={() => navigation.goBack()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 28, color: '#0db83dff' }
});