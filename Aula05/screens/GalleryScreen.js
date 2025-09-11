import { View, Text, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function GalleryScreen() {
    return (
        <View style={styles.container}>
            <AntDesign style={styles.image} name="camera" size={30} color="grey" />
            <Image
                source={{ uri: 'https://th.bing.com/th/id/R.c21e1e81e217fc67590161d2a91838f9?rik=eXr4wmkhuIrLyw&riu=http%3a%2f%2fmedia.ign.com%2fgames%2fimage%2fobject%2f886%2f886158%2fGod-of-War-III_US_ESRB.jpg&ehk=HpgAvZ2wtad8gp9Mz6g%2fr%2f4xkdZTUH1kGXNgxD5FFHs%3d&risl=&pid=ImgRaw&r=0' }}
                style={{ width: 175, height: 175, marginBottom: 20}}
            />
            <Image
                source={{ uri: 'https://m.media-amazon.com/images/I/91BJ4oyPXeL._AC_SL1500_.jpg' }}
                style={{ width: 175, height: 175, marginBottom: 20 }}
            />
            <Image
                source={{ uri: 'https://tse4.mm.bing.net/th/id/OIP.n6J9Q8z_xWB05w3A9JywuQHaIh?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' }}
                style={{ width: 175, height: 175, marginBottom: 20}}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    image: {position: 'absolute', top: 40, left: 20},
    games: {marginBottom: 20}
});