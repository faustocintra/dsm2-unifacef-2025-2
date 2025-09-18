import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Home</Text>
            <Button
                title="Ir para Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            <Button
                title="Ir para Galeria"
                onPress={() => navigation.navigate('Galery')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});