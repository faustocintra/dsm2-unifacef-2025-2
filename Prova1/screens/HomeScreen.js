import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Richardy Gabriel Rodrigues da Costa N°: 25041</Text>
            <Button
                title="Ir para Galeria Internet"
                onPress={() => navigation.navigate('Galery')}
            />
            <Button
                title="Ir para Galeria Local"
                onPress={() => navigation.navigate('GaleryLocal')}
            />
            <Button
                title="Ir para Icons"
                onPress={() => navigation.navigate('Icon')}
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