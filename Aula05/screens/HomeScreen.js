import { View, Text, Button, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tela Inicial</Text>
            <Button
                title="Ir para Perfil"
                onPress={() => navigation.navigate('Perfil')}
            />
            <View style={{ height: 12 }} />
            <Button
                title="Abrir Galeria"
                onPress={() => navigation.navigate('Galeria')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, fontWeight: 'bold' }
});
