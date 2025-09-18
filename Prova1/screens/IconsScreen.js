import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function IconsScreen({ navigation }) {
    return (
        <View style={styles.container}>            
            <View style={styles.icones}>
                <Ionicons name="settings" size={72} color="#862ecc" />
                <Ionicons name="book" size={72} color="#cc852eff" />
                <Ionicons name="key" size={72} color="#2ecc87ff" />
            </View>          
        </View>
    );
}
const styles = StyleSheet.create({
    container: { display: 'flex', justifyContent: 'start', alignItems: 'center', height: '100%'},
    icones: { display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', height: '100%', gap: 40 }
});