import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function GaleriaScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name="camera" size={72} color="#862ecc" />
            <View style={styles.imagens}>
                <Image
                    source={{ uri: 'https://scontent.frao1-1.fna.fbcdn.net/v/t39.30808-1/306269762_519010013560764_1562624354876277367_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=f907e8&_nc_ohc=7hyiu48orDEQ7kNvwFgLVaY&_nc_oc=AdlDD6Ys3TvGP3etEWPC-rFNz-1Q4Qpgq-A-8LtK-jCFuJHHhMJeRs-7yYUaI4BKiN4&_nc_zt=24&_nc_ht=scontent.frao1-1.fna&_nc_gid=j3HFQY8vHd2K3C8Gf0VYCQ&oh=00_AfaHLKibiIU8SfQSkOOhjbC5ekUccCKptyjXQQ0S9L-PZw&oe=68D23BB1' }}
                    style={{ width: 200, height: 200 }}
                />
                <Image
                    source={{ uri: 'https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/production/podcast_uploaded400/10040800/10040800-1603237067095-eb9175900d5cc.jpg' }}
                    style={{ width: 200, height: 200 }}
                />
                <Image
                    source={{ uri: 'https://scontent.frao1-1.fna.fbcdn.net/v/t39.30808-1/414960255_921614305992285_3400031485209247380_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=107&ccb=1-7&_nc_sid=f907e8&_nc_ohc=wnVBfgQ-akgQ7kNvwFEYzqn&_nc_oc=AdlG17IVUVnx7zzz79yshcuJVs7npPBIfINmiwXWbj14nY1uwA-VfFbelu1feYZAE6g&_nc_zt=24&_nc_ht=scontent.frao1-1.fna&_nc_gid=JfesUHozbKcpDZw8Oij-Ow&oh=00_AfalDxL3N7lw4gt9Zdzh7Z1_BxDf8ayMs0mHMSt6cNyoIw&oe=68D2173D' }}
                    style={{ width: 200, height: 200 }}
                />
            </View>          
        </View>
    );
}
const styles = StyleSheet.create({
    container: { display: 'flex', justifyContent: 'start', alignItems: 'center', height: '100%'},
    avatar: { width: 100, height: 100, borderRadius: 50 },
    nome: { fontSize: 22, fontWeight: 'bold', marginVertical: 10 },
    imagens: { display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'start', height: '100%', gap: 40 }
});