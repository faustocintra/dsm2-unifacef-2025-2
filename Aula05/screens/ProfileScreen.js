import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen({ navigation }){

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={require('../assets/avatar.png')} />
            </View>
            <View style={{ alignItems: 'center', marginBottom: 8, flexDirection: 'row'}}>
                <Text style={styles.title}>
                    Hello John! 
                </Text>
                <Ionicons name="hand-left-outline" size={24} color="gray" />
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
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
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
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
    }  
})