import { Button, View, Image, StyleSheet } from "react-native";

export default function GaleryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.container_images}>
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
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' },
    container_images: { flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }
});