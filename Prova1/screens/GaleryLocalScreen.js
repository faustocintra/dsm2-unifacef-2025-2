import { Button, Image, StyleSheet, View } from "react-native";

export default function GaleryLocalScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/logo.png')} style={styles.imagem} />
            </View>
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    imagem: { width: 200, height: 200, resizeMode: 'contain' }
});