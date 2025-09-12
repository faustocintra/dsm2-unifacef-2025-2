import { View, Text, Button, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                title="Ir para perfil"
                onPress={() => navigation.navigate('Perfil')}
            />
            <Button
                title="Ir para Galeria"
                onPress={() => navigation.navigate('Galeria')}
            />
            <FontAwesome name="home" size={40} color="blue" />
            <Text style={styles.texto}>Página Inicial</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    texto: { fontSize: 20, marginTop: 10 }
});