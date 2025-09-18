import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Tela4({ navigation }) {
 return (
 <View style={styles.container}>
    <View style={styles.icon}>
        <FontAwesome name="home" size={40} color="blue" />
        <FontAwesome name="star" size={40} color="orange" />
        <FontAwesome name="user" size={40} color="green" />
    </View>
 </View>
 );
}

const styles = StyleSheet.create({
 container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
 icon: {
 flexDirection: 'row', justifyContent: 'space-between', width: 180 ,marginBottom: 20
 },
 texto: { fontSize: 20, marginTop: 10 }
});