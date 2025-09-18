import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Isabela Suzumura Neves</Text>
            <Button
                title="Ir para Foto da Internet"
                onPress={() => navigation.navigate('Foto')}
            />
            <Button 
                title="Ir para Foto Local"
                onPress={() => navigation.navigate('Local')}
            />
            <Button 
                title="Ir para ícones"
                onPress={() => navigation.navigate('Icone')}
            />
            <Text style={styles.texto}>Página Inicial</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'space-around', alignItems: 'center' },
    texto: { fontSize: 20, marginTop: 10 },
});