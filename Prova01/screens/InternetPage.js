import { View, Image, StyleSheet, Button } from 'react-native';

export default function InternetPage({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://th.bing.com/th/id/R.c21e1e81e217fc67590161d2a91838f9?rik=eXr4wmkhuIrLyw&riu=http%3a%2f%2fmedia.ign.com%2fgames%2fimage%2fobject%2f886%2f886158%2fGod-of-War-III_US_ESRB.jpg&ehk=HpgAvZ2wtad8gp9Mz6g%2fr%2f4xkdZTUH1kGXNgxD5FFHs%3d&risl=&pid=ImgRaw&r=0' }}
                style={{ width: 175, height: 175, marginBottom: 20}}
            />
            <Button title='Voltar' onPress={() => navigation.goBack()}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'yellow' },
    image: {position: 'absolute', top: 40, left: 20},
});