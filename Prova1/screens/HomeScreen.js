import { View, Text, Button, StyleSheet } from 'react-native';
export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lucas Henrique Aparecido Rodrigues</Text>
            <Button
                title="Ir para Imagem Web"
                color="#007AFF"
                onPress={() => navigation.navigate('ImagemWeb')}
            />
            <Button
                title="Ir para Imagem Local"
                color="#007AFF"
                onPress={() => navigation.navigate('ImagemLocal')}
            />
            <Button
                title="Ir para os Icons"
                color="#007AFF"
                onPress={() => navigation.navigate('Icons')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10 },
    titulo: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
});