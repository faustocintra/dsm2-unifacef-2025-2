import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Ir para Perfil" onPress={() => navigation.navigate('Profile')} />
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Abrir Galeria" onPress={() => navigation.navigate('Gallery')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});