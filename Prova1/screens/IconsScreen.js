import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconsScreen() {
    return (
        <View style={styles.container}>
            <Ionicons name="home" size={30} color="#f71c1cff" />
            <Ionicons name="search" size={30} color="#070bd4ff" />
            <Ionicons name="notifications" size={30} color="#6ecf13ff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});