import { Ionicons } from "@expo/vector-icons"
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default function GalleryScreen({ navigation }){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ gap: 10, alignItems: 'center', flexDirection: 'row' }}>
                <Text style={styles.title}>Gallery Screen</Text>
                <Ionicons name="camera-outline" size={24} color="gray" />
            </View>
            <View style={{ gap: 20, marginVertical: 20, flexDirection: 'row' }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.description}>Space 1</Text>
                    <Image style={styles.image} source={{ uri: 'https://plus.unsplash.com/premium_photo-1690571200236-0f9098fc6ca9?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.description}>Space 2</Text>
                    <Image style={styles.image} source={{ uri: 'https://plus.unsplash.com/premium_photo-1722018576685-45a415a4ff67?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.description}>Space 3</Text>
                    <Image style={styles.image} source={{ uri: 'https://plus.unsplash.com/premium_photo-1678832578846-03a3c798262c?q=80&w=1311&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.textButton}>
                        Go Back
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#006ae2ff',
        marginBottom: 16,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginBottom: 16
    }
})