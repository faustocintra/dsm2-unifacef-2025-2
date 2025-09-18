import { View, Text, StyleSheet, Button, Image } from 'react-native';


export default function ImagePage() {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/imagem prova.webp')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    image: {position: 'absolute', width: 100, height: 100}
})