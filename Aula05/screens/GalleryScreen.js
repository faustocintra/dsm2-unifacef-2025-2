
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GalleryScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name="camera" size={48} color="#007AFF" style={styles.icon} />
            <Text style={styles.nome}>Galeria</Text>
            <View style={styles.imagesRow}>
                <Image
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={styles.avatar}
                />
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=100&h=100' }}
                    style={styles.avatar}
                />
                <Image
                    source={{ uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100' }}
                    style={styles.avatar}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 40 },
    icon: { marginBottom: 10 },
    imagesRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20 },
    avatar: { width: 100, height: 100, borderRadius: 10, marginHorizontal: 5 },
    nome: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 }
});