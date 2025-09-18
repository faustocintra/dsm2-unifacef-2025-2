import { View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';

export default function ImageWeb({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg' }} style={{ width: 200, height: 200 }} />
            <View style={{ marginBottom: 20 }}></View>
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12da54ff',
        padding: 20,
    }
});