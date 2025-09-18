import { View, Text, Image, StyleSheet } from 'react-native';
export default function PhotoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bob Esponja</Text>
            <Image
                source={{ uri: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/graphics/bob2.png?crop=0%2C135%2C1080%2C810&wid=400&hei=300&scl=2.7' }}
                style={styles.fotos}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#50dcf5ff' },
    fotos: { width: 250, height: 250, borderRadius: 3 },
});
