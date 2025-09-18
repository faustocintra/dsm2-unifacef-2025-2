import { View, Image, StyleSheet } from 'react-native';

export default function FullScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/background.webp')} style={styles.imagem} />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    imagem: { width: '100%', height: '100%', resizeMode: 'cover' }
});
