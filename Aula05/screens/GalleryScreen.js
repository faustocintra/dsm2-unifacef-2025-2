import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function GalleryScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <MaterialCommunityIcons name="camera" size={28} color="#1e90ff" />
            <Text style={styles.title}>Galeria</Text>
            <View style={styles.row}>
                <Image
                    source={{ uri: 'https://picsum.photos/id/1011/600/400' }}
                    style={styles.image}
                />
                <Image
                    source={{ uri: 'https://picsum.photos/id/1025/600/400' }}
                    style={styles.image}
                />
                <Image
                    source={{ uri: 'https://picsum.photos/id/1003/600/400' }}
                    style={styles.image}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: { padding: 16, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
    row: { width: '100%', alignItems: 'center' },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 12,
        borderRadius: 8,
        resizeMode: 'cover'
    }
});
