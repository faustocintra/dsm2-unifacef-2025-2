import { View, Text, Image, StyleSheet } from 'react-native';
export default function LocalScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Camaleão</Text>
            <Image source={require('../assets/camaleao.png')} style={styles.fotos} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    fotos: { width: 250, height: 250, borderRadius: 3, resizeMode: 'contain' },
});
