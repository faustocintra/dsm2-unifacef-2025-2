import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function IconsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.iconsRow}>
                <Ionicons name="home" size={30} color="blue" />
                <Ionicons name="settings" size={30} color="green" />
                <Ionicons name="person" size={30} color="red" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    iconsRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        width: 200, 
        marginTop: 20 
    }
});
