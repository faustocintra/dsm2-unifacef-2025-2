import { View, Text, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function App() {
    return (
        <View style={styles.container}>
            <AntDesign name="code" size={24} color="red" />
            <AntDesign name="crown" size={24} color="orange" />
            <AntDesign name="fire" size={24} color="blue" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
});
