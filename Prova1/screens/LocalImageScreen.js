
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function LocalImageScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imagesRow}>
                <Image
                    source={require('../assets/estadio.jpeg')}
                    style={styles.avatar}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    imagesRow: { justifyContent: 'center', alignItems: 'center' },
    avatar: { width: 100, height: 100, borderRadius: 10 },
});