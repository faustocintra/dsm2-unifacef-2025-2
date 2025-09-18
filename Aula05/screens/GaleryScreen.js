import { Button, Image, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';


export default function GaleryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <AntDesign name="camera" size={50} color="gray" />
            <Text style={styles.titulo}>Tela Galeria</Text>
            <View style={styles.container_images}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3_N11iiZOt4xVtq4-ceDz4smBqo4nXUHHdAspV8qmHMbH_MSQ1viQ0e7VQo2EAZLTfaFfFEYh4YGJcuv2bZWMCtdnaWdTXzvrJk_9J2m' }} style={{ width: 120, height: 120 }} />
                <Image source={{ uri: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg' }} style={{ width: 120, height: 120 }} />
                <Image source={{ uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNwT8oIL6I8dVn0OYNJIfapiYx6czGbabkGyXh8k8EAd-lXX8q0aKM1ynoWHSrHJAjwR3PI8iba3om4ilH7h_b6E1K8B-zdmbBwmgwyrtr' }} style={{ width: 120, height: 120 }} />

            </View>
            <Button
                title="Voltar"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    titulo: { fontSize: 24, color: 'black' },
    container_images: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', gap: 30 }
});