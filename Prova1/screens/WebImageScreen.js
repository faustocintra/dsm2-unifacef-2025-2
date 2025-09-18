
import { View, Text, Image, StyleSheet, Button } from 'react-native';

export default function WebImageScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imagesRow}>
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100' }}
                    style={styles.avatar}
                />
                <Button
                    title="Voltar para o Início"
                    color="#007AFF"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 40, backgroundColor: '#b76464ff' },
    icon: { marginBottom: 10 },
    imagesRow: { flexDirection: 'col', justifyContent: 'center', alignItems: 'center', marginVertical: 20 },
    avatar: { width: 100, height: 100, borderRadius: 10, marginHorizontal: 5, marginBottom: 10 },
});