import { View, Image, StyleSheet } from 'react-native';

export default function LocalImage() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/imagemProva.png')} style={{ width: 200, height: 200 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});