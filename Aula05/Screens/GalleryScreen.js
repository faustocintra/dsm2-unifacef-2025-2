import { View, Text, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Galeria</Text>
            <AntDesign name="camera" size={50} color="blue"/>
            <Image
                source={{ uri: 'https://www.shutterstock.com/image-photo/beautiful-golden-retriever-cute-puppy-260nw-2526542701.jpg' }}
                style={styles.fotos}
            />
            <Image
                source={{ uri: 'https://fotos.amomeupet.org/uploads/fotos/1749748492_684b0b0c1967b_hd.jpg' }}
                style={styles.fotos}
            />
            <Image
                source={{ uri: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/graphics/bob2.png?crop=0%2C135%2C1080%2C810&wid=400&hei=300&scl=2.7' }}
                style={styles.fotos}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    fotos: { width: 250, height: 250, borderRadius: 3 },
});
