import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }){

    return (
        <View style={styles.container}>
            <View>
                <Image 
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    style={{ width: 64, height: 64, marginBottom: 16 }}
                />
            </View>
            <View style={{ alignItems: 'center', marginBottom: 16 }}>
                <Text style={styles.title}>Home Page</Text>
                <Text style={styles.subtitle}>Welcome to this application</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.buttonText}>
                        Go Profile
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gallery')}>
                    <Text style={styles.buttonText}>
                        Go Gallery
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
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
    },
    button: {
        backgroundColor: '#006ae2ff',
        marginBottom: 16,
        paddingHorizontal: 24,
        paddingVertical: 8,
        borderRadius: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})